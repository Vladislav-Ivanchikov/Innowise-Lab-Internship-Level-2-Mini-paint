import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { privateRoutes, publicRoutes } from "../utils/routes";
import { Context } from "../index";
import { RouteConst } from "../types/routes";

const AppRouter: React.FC = () => {
  const { auth } = useContext(Context);
  let [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route
        path="*"
        element={<Navigate replace to={RouteConst.HOME_ROUTE} />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route
        path="*"
        element={<Navigate replace to={RouteConst.SIGNIN_ROUTE} />}
      />
    </Routes>
  );
};

export default AppRouter;