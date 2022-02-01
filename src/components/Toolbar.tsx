import React from "react";
import { useDispatch } from "react-redux";
import {brushAction, circleAction, lineAction, rectAction} from "../store/action-creators/toolAction";
import { setColor, setLineWidth } from "../store/action-creators/drawAction";
import styled from "styled-components";

const ToolbarWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 10vw;
  position: absolute;
  top: 10vh;
  left: 0;
  height: 90vh;
  background-color: dimgray;
`;
const ToolBtn = styled.button`
  background-color: transparent;
  font-size: 18px;
  padding: 10px;
  color: white;
  border: 2px solid white;
  margin: 20px 0;
  transition: 0.2s;

  :hover {
    color: dimgray;
    background-color: white;
  }
`;

const Toolbar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <ToolbarWrap>
      <div>
        <ToolBtn onClick={() => dispatch(brushAction())}>Brush</ToolBtn>
      </div>
      <div>
        <ToolBtn onClick={() => dispatch(rectAction())}>Rect</ToolBtn>
      </div>
      <div>
        <ToolBtn onClick={() => dispatch(circleAction())}>
          Circle
        </ToolBtn>
      </div>
      <div>
        <ToolBtn onClick={() => dispatch(lineAction())}>
          Line
        </ToolBtn>
      </div>
      <div>
        <input
          type="color"
          onChange={(e) => dispatch(setColor(e.target.value))}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={{ color: "white", fontSize: 18 }} htmlFor="line-width">
          Line width
        </label>
        <br />
        <input
          id="line-width"
          type="number"
          defaultValue={1}
          min={1}
          max={50}
          onChange={(e) => dispatch(setLineWidth(Number(e.target.value)))}
        />
      </div>
    </ToolbarWrap>
  );
};

export default Toolbar;
