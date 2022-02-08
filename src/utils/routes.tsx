import React from "react";
import Registration from "../pages/Registration";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
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