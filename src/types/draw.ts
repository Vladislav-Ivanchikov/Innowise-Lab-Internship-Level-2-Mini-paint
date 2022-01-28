export interface DrawStateType {
  isDraw: boolean;
}

export interface StartDrawActionType {
  type: DrawEnumTypes.START_DRAW;
  payload: boolean;
}

export enum DrawEnumTypes {
  START_DRAW = "START_DRAW",
}

export type DrawActionType = StartDrawActionType;
