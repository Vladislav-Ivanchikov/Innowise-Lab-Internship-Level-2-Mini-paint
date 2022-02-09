import React from "react";
import {useActions} from "../../hooks/useActions";
import {Btn, LabelWrap, ToolbarWrap, ToolDiv} from "./Toolbar.style";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Toolbar: React.FC = () => {
    const {
        brushAction,
        rectAction,
        circleAction,
        lineAction,
        setStrokeColor,
        setFillColor,
        setLineWidth,
        saveImageURL,
    } = useActions();

    // const { canvasRef } = useTypedSelector(store => store.canvas)
    //
    // const saveImage = () => {
    //     canvasRef!.current!.toDataURL()
    // };

    return (
        <ToolbarWrap>
            <ToolDiv>
                <Btn onClick={() => brushAction()}>Brush</Btn>
            </ToolDiv>
            <ToolDiv>
                <Btn onClick={() => rectAction()}>Rect</Btn>
            </ToolDiv>
            <ToolDiv>
                <Btn onClick={() => circleAction()}>Circle</Btn>
            </ToolDiv>
            <ToolDiv>
                <Btn onClick={() => lineAction()}>Line</Btn>
            </ToolDiv>
            <ToolDiv>
                <LabelWrap htmlFor="stroke-color">Stroke color</LabelWrap>
                <input
                    style={{width: "100%"}}
                    id="stroke-color"
                    type="color"
                    onChange={(e) => setStrokeColor(e.target.value)}
                />
            </ToolDiv>
            <ToolDiv>
                <LabelWrap htmlFor="fill-color">Fill color</LabelWrap>
                <input
                    style={{width: "100%"}}
                    id="fill-color"
                    type="color"
                    onChange={(e) => setFillColor(e.target.value)}
                />
            </ToolDiv>
            <ToolDiv>
                <LabelWrap htmlFor="line-width">Line width</LabelWrap>
                <input
                    style={{width: "100%", textAlign: "center", fontSize: 18}}
                    id="line-width"
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={50}
                    onChange={(e) => setLineWidth(+e.target.value)}
                />
            </ToolDiv>
            <ToolDiv>
                <Btn onClick={() => {}}>Save</Btn>
            </ToolDiv>
        </ToolbarWrap>
    );
};

export default Toolbar;
