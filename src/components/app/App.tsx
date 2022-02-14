import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import AppRouter from "./AppRoutes";
import AuthProvider from "../../context/AuthContext";
import { AppStyle } from "./App.style";
import { ThemeProvider } from "styled-components";
import {baseTheme} from "../../utils/theme";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={baseTheme}>
          <AppStyle />
          <Navbar />
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;