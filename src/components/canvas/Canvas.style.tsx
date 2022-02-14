import styled from "styled-components";

export const CanvasWrap = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const CanvasList = styled.canvas`
  background-color: white;
  border: 1px solid dimgray;
  
  @media ${({theme}) => theme.media.small} {
    display: flex;
    justify-content: center;
    width: 300px;
    height: 600px;
    margin-left: 70px;
  }
`;