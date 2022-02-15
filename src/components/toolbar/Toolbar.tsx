import React, {ChangeEvent, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {useActions} from "../../utils/useActions";
import {useTypedSelector} from "../../utils/useTypedSelector";
import {Context} from "../../index";
import {addDoc, collection} from "firebase/firestore";
import Swal from "sweetalert2";
import {IState} from "../../types/state";
import {
    Btn,
    LabelWrap,
    ToolbarWrap,
    ToolDiv,
    ToolInput,
} from "./Toolbar.style";

const Toolbar: React.FC = () => {
    const {db, auth} = useContext(Context);
    let navigate = useNavigate();

    const {
        brushAction,
        rectAction,
        circleAction,
        lineAction,
        setStrokeColor,
        setFillColor,
        setLineWidth,
    } = useActions();

    const {image} = useTypedSelector((state: IState) => state.tool);

    const sendImageToBD = async (image: string) => {
        const username = auth.currentUser.email;
        try {
            await addDoc(collection(db, "users"), {
                username,
                image,
            });
            await Swal.fire({
                position: "center",
                icon: "success",
                title: `Image saved in DataBase !`,
                showConfirmButton: false,
                timer: 3000,
            });
            navigate("/");
        } catch {
            await Swal.fire({
                position: "top",
                icon: "error",
                title: `Something went wrong, please try letter`,
                showConfirmButton: false,
                timer: 3000,
            });
        }
    };

    const brushActionHandler = () => {
        brushAction();
    };
    const rectActionHandler = () => {
        rectAction();
    };
    const circleActionHandler = () => {
        circleAction();
    };
    const lineActionHandler = () => {
        lineAction();
    };
    const setStrokeActionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStrokeColor(e.target.value);
    };
    const setFillActionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFillColor(e.target.value);
    };
    const setLineActionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLineWidth(+e.target.value);
    };
    const sendImageActionHandler = async () => {
        await sendImageToBD(image);
    };

    return (
        <ToolbarWrap>
            <ToolDiv>
                <Btn onClick={brushActionHandler}>Brush</Btn>
            </ToolDiv>
            <ToolDiv>
                <Btn onClick={rectActionHandler}>Rect</Btn>
            </ToolDiv>
            <ToolDiv>
                <Btn onClick={circleActionHandler}>Circle</Btn>
            </ToolDiv>
            <ToolDiv>
                <Btn onClick={lineActionHandler}>Line</Btn>
            </ToolDiv>
            <ToolDiv>
                <LabelWrap htmlFor="stroke-color">Stroke color</LabelWrap>
                <ToolInput
                    id="stroke-color"
                    type="color"
                    onChange={setStrokeActionHandler}
                />
            </ToolDiv>
            <ToolDiv>
                <LabelWrap htmlFor="fill-color">Fill color</LabelWrap>
                <ToolInput
                    id="fill-color"
                    type="color"
                    onChange={setFillActionHandler}
                />
            </ToolDiv>
            <ToolDiv>
                <LabelWrap htmlFor="line-width">Line width</LabelWrap>
                <ToolInput
                    id="line-width"
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={50}
                    onChange={setLineActionHandler}
                />
            </ToolDiv>
            <ToolDiv>
                <Btn onClick={sendImageActionHandler}>Save</Btn>
            </ToolDiv>
        </ToolbarWrap>
    );
};

export default Toolbar;
