import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StylesProvider injectFirst>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </StylesProvider>,

  document.getElementById("root")
);
