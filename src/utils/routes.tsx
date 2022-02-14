import React from "react";
import Registration from "../pages/auth/Registration";
import SignIn from "../pages/auth/SignIn";
import Home from "../pages/home/Home";
import Canvas from "../components/canvas/Canvas";
import {IRoute, RouteName} from "../types/routes";


export const privateRoutes: IRoute[] = [
    {
        path: RouteName.HOME_ROUTE,
        Component: <Home/>,
    },
    {
        path: RouteName.CANVAS_ROUTE,
        Component: <Canvas/>,
    },
];

export const publicRoutes: IRoute[] = [
    {
        path: RouteName.SIGNIN_ROUTE,
        Component: <SignIn/>,
    },
    {
        path: RouteName.REG_ROUTE,
        Component: <Registration/>,
    },
];