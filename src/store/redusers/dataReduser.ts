import {DataStateType, DataTypes, UsersActionType, UsersDataType} from "../../types/data";

const initialState: DataStateType = {
    users: []
}

export const dataReduser = (state = initialState, action: UsersActionType) => {
    switch (action.type) {
        case DataTypes.FETCH_USERS:
            return {...state, users: [...state.users, action.payload]}
        default: return state
    }
}