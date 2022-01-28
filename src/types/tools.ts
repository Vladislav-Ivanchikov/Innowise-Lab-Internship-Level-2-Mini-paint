export interface ToolStateType {
  tool: string;
  startX: number;
  startY: number;
  width: number;
  height: number;
}

export enum ToolEnumTypes {
  BRUSH = "BRUSH",
  RECT = "RECT",
  CIRCLE = "CIRCLE",
  LINE = "LINE",
  SET_WIDTH_AND_HEIGHT = "SET_WIDTH_AND_HEIGHT",
}

export interface BrushActionType {
  type: ToolEnumTypes.BRUSH;
}

interface RectPayloadType {
  x: number;
  y: number;
}

export interface RectActionType {
  type: ToolEnumTypes.RECT;
  payload: RectPayloadType;
}

export interface CircleActionType {
  type: ToolEnumTypes.CIRCLE;
}

export interface LineActionType {
  type: ToolEnumTypes.LINE;
}

interface WithAndHeightPayloadType {
  w: number;
  h: number;
}

export interface WithAndHeightActionType {
  type: ToolEnumTypes.SET_WIDTH_AND_HEIGHT;
  payload: WithAndHeightPayloadType;
}

export type ToolActionType =
  | BrushActionType
  | RectActionType
  | CircleActionType
  | LineActionType
  | WithAndHeightActionType;
