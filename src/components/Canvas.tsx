import React, { useEffect, useRef } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { drawAction, setSaved } from "../store/action-creators/drawAction";
import Toolbar from "./Toolbar";
import { ToolTypes } from "../types/tools";
import {
  circleAction,
  lineAction,
  rectAction,
  setWithAndHeight,
} from "../store/action-creators/toolAction";
import styled from "styled-components";

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

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const { isDraw, color, lineWidth, saved } = useTypedSelector(
    (state) => state.draw
  );
  const { tool, startX, startY, width, height } = useTypedSelector(
    (state) => state.tool
  );
  const dispatch = useDispatch();
  let img: HTMLImageElement;

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    ctx!.lineCap = "square";
    ctx!.strokeStyle = color;
    ctx!.fillStyle = "white";
    ctx!.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [color, lineWidth]);

  const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent;

    switch (tool) {
      case ToolTypes.BRUSH:
        dispatch(drawAction(true));
        ctxRef!.current!.beginPath();
        ctxRef!.current!.moveTo(offsetX, offsetY);
        dispatch(setSaved(canvasRef!.current!.toDataURL()));
        break;
      case ToolTypes.RECT:
        dispatch(drawAction(true));
        ctxRef!.current!.beginPath();
        dispatch(rectAction(offsetX, offsetY));
        dispatch(setSaved(canvasRef!.current!.toDataURL()));
        break;
      case ToolTypes.CIRCLE:
        dispatch(drawAction(true));
        ctxRef!.current!.beginPath();
        dispatch(circleAction(offsetX, offsetY));
        dispatch(setSaved(canvasRef!.current!.toDataURL()));
        break;
      case ToolTypes.LINE:
        dispatch(drawAction(true));
        dispatch(lineAction(offsetX, offsetY));
        ctxRef!.current!.beginPath();
        ctxRef!.current!.moveTo(startX, startY);
        dispatch(setSaved(canvasRef!.current!.toDataURL()));
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
      case ToolTypes.BRUSH:
        ctxRef!.current!.lineTo(offsetX, offsetY);
        ctxRef!.current!.stroke();
        break;
      case ToolTypes.RECT:
        img = new Image();
        img.src = saved;
        img.onload = () => {
          ctxRef!.current!.clearRect(
            0,
            0,
            canvasRef!.current!.width,
            canvasRef!.current!.height
          );
          ctxRef!.current!.drawImage(
            img,
            0,
            0,
            canvasRef!.current!.width,
            canvasRef!.current!.height
          );
          dispatch(setWithAndHeight(offsetX - startX, offsetY - startY));
          ctxRef!.current!.beginPath();
          ctxRef!.current!.rect(startX, startY, width, height);
          ctxRef!.current!.fill();
          ctxRef!.current!.stroke();
        };
        break;
      case ToolTypes.CIRCLE:
        img = new Image();
        img.src = saved;
        img.onload = () => {
          ctxRef!.current!.clearRect(
            0,
            0,
            canvasRef!.current!.width,
            canvasRef!.current!.height
          );
          ctxRef!.current!.drawImage(
            img,
            0,
            0,
            canvasRef!.current!.width,
            canvasRef!.current!.height
          );
          dispatch(setWithAndHeight(offsetX - startX, offsetY - startY));
          ctxRef!.current!.beginPath();
          ctxRef!.current!.arc(
            startX,
            startY,
            Math.sqrt(width ** 2 + height ** 2),
            0,
            2 * Math.PI
          );
          ctxRef!.current!.fill();
          ctxRef!.current!.stroke();
        };
        break;
      case ToolTypes.LINE:
        img = new Image();
        img.src = saved;
        img.onload = () => {
          ctxRef!.current!.clearRect(
            0,
            0,
            canvasRef!.current!.width,
            canvasRef!.current!.height
          );
          ctxRef!.current!.drawImage(
            img,
            0,
            0,
            canvasRef!.current!.width,
            canvasRef!.current!.height
          );
          ctxRef!.current!.beginPath();
          ctxRef!.current!.moveTo(startX, startY);
          ctxRef!.current!.lineTo(offsetX, offsetY);
          ctxRef!.current!.stroke();
        };
        break;
      default:
        return;
    }
  };

  const finishDrawing = () => {
    dispatch(drawAction(false));
    ctxRef!.current!.closePath();
  };

  return (
    <CanvasWrap>
      <Toolbar />
      <CanvasList
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={finishDrawing}
        ref={canvasRef}
        width={800}
        height={600}
      />
    </CanvasWrap>
  );
};

export default Canvas;