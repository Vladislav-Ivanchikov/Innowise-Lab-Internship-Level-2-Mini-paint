import {createGlobalStyle} from "styled-components";

export const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 18px;
    background-color: rgb(189, 189, 194);
  }

  #root {
    min-height: 100vh;
  }

  h2 {
    color: rgb(16, 16, 16);
    text-shadow: 1px 0px 2px rgb(225, 225, 225);
    margin-bottom: 20px;
  }
`;