import React from "react";
import { useActions } from "../../hooks/useActions";
import {LabelWrap, ToolbarWrap, ToolBtn, ToolDiv} from "./Toolbar.style";

const Toolbar: React.FC = () => {
  const {
    brushAction,
    rectAction,
    circleAction,
    lineAction,
    setStrokeColor,
    setFillColor,
    setLineWidth,
  } = useActions();

  return (
    <ToolbarWrap>
      <ToolDiv>
        <ToolBtn onClick={() => brushAction()}>Brush</ToolBtn>
      </ToolDiv>
      <ToolDiv>
        <ToolBtn onClick={() => rectAction()}>Rect</ToolBtn>
      </ToolDiv>
      <ToolDiv>
        <ToolBtn onClick={() => circleAction()}>Circle</ToolBtn>
      </ToolDiv>
      <ToolDiv>
        <ToolBtn onClick={() => lineAction()}>Line</ToolBtn>
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
    </ToolbarWrap>
  );
};

export default Toolbar;
