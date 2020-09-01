import React from "react";
import { render } from "react-dom";
import AppProvider from "./clam-apollo";
import App from "./components/App";
import { GlobalStyle } from "./theme";
import GlobalFonts from "./fonts/fonts";

render(
  <AppProvider>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </AppProvider>,
  document.getElementById("root")
);
