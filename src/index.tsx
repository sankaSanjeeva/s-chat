import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import { GlobalStyles } from "twin.macro";
import "./index.css";
import App from "./App";
import { stylesBase, ThemeProvider } from "./theme";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <Global styles={stylesBase} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
