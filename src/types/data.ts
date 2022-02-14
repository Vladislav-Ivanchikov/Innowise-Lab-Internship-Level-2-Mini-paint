export interface UsersDataType {
    username: string,
    image: string
}

export interface DataStateType {
    users: UsersDataType[]
    findReq: string
}

export enum DataTypes{
    FETCH_USERS = "FETCH_USERS",
    FIND_USERS = "FIND_USERS",
    FILTRED_USERS = "FILTRED_USERS",
    CLEAR_USERS  = "CLEAR_USERS"
}

export interface UsersActionType {
    type: DataTypes.FETCH_USERS
    payload: UsersDataType[]
}

export interface FindUserActionType {
    type: DataTypes.FIND_USERS
    payload: string
}

export interface FiltredUserActionType {
    type: DataTypes.FILTRED_USERS,
    payload: UsersDataType[]
}

export interface ClearUsersActionType {
    type: DataTypes.CLEAR_USERS,
    payload: []
}

export type DataActionTypes = UsersActionType | FindUserActionType | FiltredUserActionType | ClearUsersActionType