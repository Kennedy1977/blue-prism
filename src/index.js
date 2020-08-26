import React from "react";
import ReactDOM from "react-dom";
import { GlobalProvider } from "./services/context/GlobalState";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components/App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
