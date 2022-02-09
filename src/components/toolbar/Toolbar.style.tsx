import styled from "styled-components";

export const ToolbarWrap = styled.div`
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
export const ToolDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;
export const Btn = styled.button`
  width: 100%;
  background-color: transparent;
  font-size: 18px;
  padding: 5px;
  color: white;
  border: 2px solid white;
  border-radius: 0.25rem;
  transition: 0.2s;

  :hover {
    color: dimgray;
    background-color: white;
  }
`;
export const LabelWrap = styled.label`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
`;