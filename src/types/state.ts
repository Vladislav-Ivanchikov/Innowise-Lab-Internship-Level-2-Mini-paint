import {DrawStateType} from "./draw";
import {ToolStateType} from "./tools";
import {CanvasStateType} from "./canvas";
import {DataStateType} from "./data";

export interface IState {
    draw: DrawStateType
    tool: ToolStateType
    canvas: CanvasStateType
    data: DataStateType
}