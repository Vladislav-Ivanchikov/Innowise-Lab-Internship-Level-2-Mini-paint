import React, { useEffect, useRef } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { ToolTypes } from "../types/tools";
import Toolbar from "./Toolbar";
import styled from "styled-components";
import {brushDraw} from "../utils/tools/brushDraw";
import {rectDraw} from "../utils/tools/rectDraw";


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
  const {
    drawAction,
    setSaved,
    rectAction,
    circleAction,
    lineAction,
    setWithAndHeight,
    canvasAction,
    ctxAction,
  } = useActions();
  let img: HTMLImageElement;

  canvasAction(canvasRef)
  ctxAction(ctxRef)

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    ctx!.lineCap = "square";
    ctx!.strokeStyle = color;
    ctx!.fillStyle = "transparent";
    ctx!.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [color, lineWidth]);

  const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent;

    switch (tool) {
      case ToolTypes.BRUSH:
        drawAction(true);
        ctxRef!.current!.beginPath();
        ctxRef!.current!.moveTo(offsetX, offsetY);
        setSaved(canvasRef!.current!.toDataURL());
        break;
      case ToolTypes.RECT:
        drawAction(true);
        ctxRef!.current!.beginPath();
        rectAction(offsetX, offsetY);
        setSaved(canvasRef!.current!.toDataURL());
        break;
      case ToolTypes.CIRCLE:
        drawAction(true);
        ctxRef!.current!.beginPath();
        circleAction(offsetX, offsetY);
        setSaved(canvasRef!.current!.toDataURL());
        break;
      case ToolTypes.LINE:
        drawAction(true);
        lineAction(offsetX, offsetY);
        ctxRef!.current!.beginPath();
        ctxRef!.current!.moveTo(startX, startY);
        setSaved(canvasRef!.current!.toDataURL());
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
        brushDraw(canvasRef, ctxRef, offsetX, offsetY)
        break;
      case ToolTypes.RECT:
        rectDraw(canvasRef, ctxRef, img, saved, setWithAndHeight, offsetX, offsetY, startX, startY, width, height)
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
          setWithAndHeight(offsetX - startX, offsetY - startY);
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
    drawAction(false);
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