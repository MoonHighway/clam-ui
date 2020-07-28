import React from "react";
import { render } from "react-dom";
import AppProvider from "./clam-apollo";
import App from "./components/App";
import { GlobalStyle } from "./theme";

render(
  <AppProvider>
    <GlobalStyle />
    <App />
  </AppProvider>,
  document.getElementById("root")
);
