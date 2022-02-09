import React, { useContext } from "react";
import { useActions } from "../../hooks/useActions";
import { Btn, LabelWrap, ToolbarWrap, ToolDiv } from "./Toolbar.style";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Context } from "../../index";
import { addDoc, collection } from "firebase/firestore";

const Toolbar: React.FC = () => {
  const { db, auth } = useContext(Context);

  const {
    brushAction,
    rectAction,
    circleAction,
    lineAction,
    setStrokeColor,
    setFillColor,
    setLineWidth,
  } = useActions();

  const { image } = useTypedSelector((state) => state.tool);

  const sendImageToBD = async (image: string) => {
    const username = auth.currentUser.email;
    try {
      await addDoc(collection(db, "users"), {
        username,
        image,
      });
      alert("image send to db");
    } catch {
      alert("Erroooor !");
    }
  };

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
          style={{ width: "100%" }}
          id="stroke-color"
          type="color"
          onChange={(e) => setStrokeColor(e.target.value)}
        />
      </ToolDiv>
      <ToolDiv>
        <LabelWrap htmlFor="fill-color">Fill color</LabelWrap>
        <input
          style={{ width: "100%" }}
          id="fill-color"
          type="color"
          onChange={(e) => setFillColor(e.target.value)}
        />
      </ToolDiv>
      <ToolDiv>
        <LabelWrap htmlFor="line-width">Line width</LabelWrap>
        <input
          style={{ width: "100%", textAlign: "center", fontSize: 18 }}
          id="line-width"
          type="number"
          defaultValue={1}
          min={1}
          max={50}
          onChange={(e) => setLineWidth(+e.target.value)}
        />
      </ToolDiv>
      <ToolDiv>
        <Btn onClick={() => sendImageToBD(image)}>Save</Btn>
      </ToolDiv>
    </ToolbarWrap>
  );
};

export default Toolbar;
