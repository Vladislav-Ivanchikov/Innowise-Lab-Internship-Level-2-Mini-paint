export interface CanvasStateType {
    canvasRef: HTMLCanvasElement | null
    ctxRef: CanvasRenderingContext2D | null
}

export enum CanvasTypes {
    CANVAS = "CANVAS",
    CTX = "CTX"
}

export interface CanvasRefActionType {
    type: CanvasTypes.CANVAS
    payload: HTMLCanvasElement
}

export interface CtxRefActionType {
    type: CanvasTypes.CTX
    payload: CanvasRenderingContext2D
}

export type CanvasActionTypes = CanvasRefActionType | CtxRefActionType