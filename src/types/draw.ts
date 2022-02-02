export interface DrawStateType {
  isDraw: boolean;
  color: string
  lineWidth: number
  saved: string
}

export enum DrawTypes {
  START_DRAW = "START_DRAW",
  SET_COLOR = "SET_COLOR",
  SET_LINE_WIDTH = "SET_LINE_WIDTH",
  SET_SAVED = "SET_SAVED"
}

export interface StartDrawActionType {
  type: DrawTypes.START_DRAW;
  payload: boolean;
}

export interface SetColorActionType {
  type: DrawTypes.SET_COLOR;
  payload: string
}

export interface SetLineWidthActionType {
  type: DrawTypes.SET_LINE_WIDTH
  payload: number
}

export interface SetSavedActionType {
  type: DrawTypes.SET_SAVED
  payload: string
}

export type DrawActionType = StartDrawActionType | SetColorActionType | SetLineWidthActionType | SetSavedActionType;
