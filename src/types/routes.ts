import React from "react";

export enum RouteName {
    HOME_ROUTE = "/",
    SIGNIN_ROUTE = "/signin",
    REG_ROUTE = "/registration",
    CANVAS_ROUTE = "/canvas",
}

export interface IRoute {
    path: string
    Component: React.ReactElement
}