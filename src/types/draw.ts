export interface DrawStateType {
  isDraw: boolean;
  strokeColor: string;
  fillColor: string;
  lineWidth: number;
  saved: string;
}

export enum DrawTypes {
  START_DRAW = "START_DRAW",
  SET_STROKE_COLOR = "SET_STROKE_COLOR",
  SET_FILL_COLOR = "SET_FILL_COLOR",
  SET_LINE_WIDTH = "SET_LINE_WIDTH",
  SET_SAVED = "SET_SAVED",
}

export interface StartDrawActionType {
  type: DrawTypes.START_DRAW;
  payload: boolean;
}

export interface SetStrokeColorActionType {
  type: DrawTypes.SET_STROKE_COLOR;
  payload: string;
}

export interface SetFillColorActionType {
  type: DrawTypes.SET_FILL_COLOR;
  payload: string;
}

export interface SetLineWidthActionType {
  type: DrawTypes.SET_LINE_WIDTH;
  payload: number;
}

export interface SetSavedActionType {
  type: DrawTypes.SET_SAVED;
  payload: string;
}

export type DrawActionType =
  | StartDrawActionType
  | SetStrokeColorActionType
  | SetFillColorActionType
  | SetLineWidthActionType
  | SetSavedActionType;
