import {MutableRefObject, RefObject} from "react";

export const circleDraw = (
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
        ctxRef!.current!.arc(sX, sY, Math.sqrt(w ** 2 + h ** 2), 0, 2 * Math.PI);
        ctxRef!.current!.fill();
        ctxRef!.current!.stroke();
    };
};