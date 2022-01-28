import React, { useEffect, useRef } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { drawAction } from "../store/action-creators/drawAction";
import Toolbar from "./Toolbar";
import styled from "styled-components";
import { ToolEnumTypes } from "../types/tools";
import {
  rectAction,
  setWithAndHeight,
} from "../store/action-creators/toolAction";

const CanvasWrap = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const CanvasList = styled.canvas`
  background-color: white;
  border: 1px solid dimgray;
`;

const Canvas = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const { isDraw } = useTypedSelector((state) => state.draw);
  const { tool, startX, startY, width, height } = useTypedSelector(
    (state) => state.tool
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    ctx!.lineCap = "square";
    ctx!.strokeStyle = "red";
    ctx!.fillStyle = "red";
    ctx!.lineWidth = 3;
    ctxRef.current = ctx;
  }, []);

  const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent;

    switch (tool) {
      case ToolEnumTypes.BRUSH:
        dispatch(drawAction(true));
        ctxRef!.current!.beginPath();
        ctxRef!.current!.moveTo(offsetX, offsetY);
        break;
      case ToolEnumTypes.RECT:
        dispatch(drawAction(true));
        ctxRef!.current!.beginPath();
        dispatch(rectAction(offsetX, offsetY));
        break;
      default:
        return;
    }
  };

  const draw = ({ nativeEvent }: React.MouseEvent) => {
    if (!isDraw) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    switch (tool) {
      case ToolEnumTypes.BRUSH:
        ctxRef!.current!.lineTo(offsetX, offsetY);
        ctxRef!.current!.stroke();
        break;
      case ToolEnumTypes.RECT:
        let currentX = offsetX;
        let currentY = offsetY;
        dispatch(setWithAndHeight(currentX - startX, currentY - startY));
        ctxRef!.current!.rect(startX, startY, width, height);
        ctxRef!.current!.fill();
        ctxRef!.current!.stroke();
        break;
      default:
        return;
    }
  };

  const finishDrawing = () => {
    ctxRef!.current!.closePath();
    dispatch(drawAction(false));
  };

  return (
    <CanvasWrap>
      <Toolbar />
      <CanvasList
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        width={800}
        height={600}
      />
    </CanvasWrap>
  );
};

export default Canvas;