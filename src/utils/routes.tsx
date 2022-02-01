import React from "react";
import Registration from "../pages/Registration";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Canvas from "../components/Canvas";
import {IRoute, RouteConst} from "../types/routes";


export const privateRoutes: IRoute[] = [
    {
        path: RouteConst.HOME_ROUTE,
        Component: <Home/>,
    },
    {
        path: RouteConst.CANVAS_ROUTE,
        Component: <Canvas/>,
    },
];

export const publicRoutes: IRoute[] = [
    {
        path: RouteConst.SIGNIN_ROUTE,
        Component: <SignIn/>,
    },
    {
        path: RouteConst.REG_ROUTE,
        Component: <Registration/>,
    },
];