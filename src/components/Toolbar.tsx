import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { brushAction, rectAction } from "../store/action-creators/toolAction";
import { ToolEnumTypes } from "../types/tools";

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
        <ToolBtn onClick={() => dispatch({ type: ToolEnumTypes.CIRCLE })}>
          Circle
        </ToolBtn>
      </div>
      <div>
        <ToolBtn onClick={() => dispatch({ type: ToolEnumTypes.LINE })}>
          Line
        </ToolBtn>
      </div>
      <div>
        <input type="color" />
      </div>
    </ToolbarWrap>
  );
};

export default Toolbar;
