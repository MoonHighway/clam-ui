import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url("./fonts/Roboto-Regular.ttf");
    font-weight: 400;
  }
  @font-face {
    font-family: "Catamaran";
    src: url("./fonts/Catamaran-ExtraBold.ttf");
    font-weight: 700;
  }
  body {
    font-family: "Roboto", sans-serif;
  }
  h1 {
    font-family: "Catamaran";
  }
`;
