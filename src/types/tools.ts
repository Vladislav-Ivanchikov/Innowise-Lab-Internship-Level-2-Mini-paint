export interface ToolStateType {
  tool: string;
  startX: number;
  startY: number;
  width: number;
  height: number;
  image: string;
}

export enum ToolTypes {
  BRUSH = "BRUSH",
  RECT = "RECT",
  CIRCLE = "CIRCLE",
  LINE = "LINE",
  SET_WIDTH_AND_HEIGHT = "SET_WIDTH_AND_HEIGHT",
  SAVE_IMAGE_URL = "SAVE_IMAGE_URL",
}

export interface BrushActionType {
  type: ToolTypes.BRUSH;
}

interface StartPositionPayloadType {
  x: number;
  y: number;
}

export interface RectActionType {
  type: ToolTypes.RECT;
  payload: StartPositionPayloadType;
}

export interface CircleActionType {
  type: ToolTypes.CIRCLE;
  payload: StartPositionPayloadType;
}

export interface LineActionType {
  type: ToolTypes.LINE;
  payload: StartPositionPayloadType;
}

interface WithAndHeightPayloadType {
  w: number;
  h: number;
}

export interface WithAndHeightActionType {
  type: ToolTypes.SET_WIDTH_AND_HEIGHT;
  payload: WithAndHeightPayloadType;
}

export interface SaveImageURL {
  type: ToolTypes.SAVE_IMAGE_URL;
  payload: string;
}

export type ToolActionType =
  | BrushActionType
  | RectActionType
  | CircleActionType
  | LineActionType
  | WithAndHeightActionType
  | SaveImageURL;
