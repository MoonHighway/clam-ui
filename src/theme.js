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
    font-family: 'RobotoDraft', 'Roboto', sans-serif;
    background-color: #f2f2f2
  }
  h1 {
    font-family: "Catamaran";
  }
`;
