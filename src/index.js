import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./services/context/GlobalState";
import { App } from "./components/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
