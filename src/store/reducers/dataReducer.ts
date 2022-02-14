import { DataActionTypes, DataStateType, DataTypes } from "../../types/data";

const initialState: DataStateType = {
  users: [],
  find: "",
};

export const dataReducer = (state = initialState, action: DataActionTypes) => {
  switch (action.type) {
    case DataTypes.FETCH_USERS:
      return { users: action.payload };
    case DataTypes.FIND_USERS:
      return { ...state, find: action.payload };
    case DataTypes.FILTRED_USERS:
      return { users: action.payload };
    default:
      return state;
  }
};
