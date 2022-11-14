import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from './ErrorHandle/ErrorBoundary'
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // <ErrorBoundary>
  <React.StrictMode>

    <App />

  </React.StrictMode>,

  document.getElementById("root")
);
