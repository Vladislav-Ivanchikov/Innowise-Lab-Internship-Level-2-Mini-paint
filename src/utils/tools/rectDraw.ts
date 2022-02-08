import {MutableRefObject, RefObject} from "react";

export const rectDraw = (
    canvasRef: RefObject<HTMLCanvasElement>,
    ctxRef: MutableRefObject<CanvasRenderingContext2D | null>,
    img: HTMLImageElement,
    saved: string,
    setWH: any,
    oX: number,
    oY: number,
    sX: number,
    sY: number,
    w: number,
    h: number
): void => {
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
        setWH(oX - sX, oY - sY);
        ctxRef!.current!.beginPath();
        ctxRef!.current!.rect(sX, sY, w, h);
        ctxRef!.current!.fill();
        ctxRef!.current!.stroke();
    };
};