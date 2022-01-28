import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AppRouter from "../Routing/AppRoutes";
import AuthProvider from "../../context/AuthContext";
import { createGlobalStyle } from "styled-components";

const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: rgb(189, 189, 194);
  }

  #root {
    min-height: 100vh;
  }
`;

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