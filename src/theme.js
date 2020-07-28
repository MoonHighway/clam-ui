import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body, #root {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
  body, h1, h2, h3, p, td, div, span {
    margin: 0;
    padding: 0;
  }
`;
