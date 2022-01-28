import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { drawAction } from "../../store/action-creators/drawAction";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    ctx!.lineCap = "round";
    ctx!.strokeStyle = "red";
    ctx!.lineWidth = 5;
    ctxRef.current = ctx;
  }, []);

  const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent;
    ctxRef!.current!.beginPath();
    ctxRef!.current!.moveTo(offsetX, offsetY);
    dispatch(drawAction(true));
  };

  const finishDrawing = () => {
    ctxRef!.current!.closePath();
    dispatch(drawAction(false));
  };

  const draw = ({ nativeEvent }: React.MouseEvent) => {
    if (!isDraw) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    ctxRef!.current!.lineTo(offsetX, offsetY);
    ctxRef!.current!.stroke();
  };

  return (
    <CanvasWrap>
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