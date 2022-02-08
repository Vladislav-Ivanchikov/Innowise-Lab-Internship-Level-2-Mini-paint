import {createGlobalStyle} from "styled-components";

export const AppStyle = createGlobalStyle`
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