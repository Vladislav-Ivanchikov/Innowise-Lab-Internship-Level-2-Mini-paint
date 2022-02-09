
export interface UsersDataType {
    name: string,
    picture: string
}

export interface DataStateType {
    users: UsersDataType[] | []
}

export enum DataTypes{
    FETCH_USERS = "FETCH_USERS"
}

export interface UsersActionType {
    type: DataTypes.FETCH_USERS
    payload: object
}

export type DataActionTypes = UsersActionType