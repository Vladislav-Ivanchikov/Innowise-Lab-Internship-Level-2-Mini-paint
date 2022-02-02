import {MutableRefObject, RefObject} from "react";

export const lineDraw = (
    canvasRef: RefObject<HTMLCanvasElement>,
    ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
    img: HTMLImageElement,
    saved: string,
    oX: number,
    oY: number,
    sX: number,
    sY: number
):void => {
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
        ctxRef!.current!.moveTo(sX, sY);
        ctxRef!.current!.lineTo(oX, oY);
        ctxRef!.current!.stroke();
    };
};