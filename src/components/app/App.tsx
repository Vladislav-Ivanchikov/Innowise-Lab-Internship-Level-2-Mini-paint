import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import AppRouter from "./AppRoutes";
import AuthProvider from "../../context/AuthContext";
import {AppStyle} from "./App.style";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppStyle />
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;