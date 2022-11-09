import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from './ErrorHandle/ErrorBoundary'

ReactDOM.render(
  <ErrorBoundary>
 
    <App />
    {/* <React.StrictMode>
   </React.StrictMode> */}
   </ErrorBoundary>,
  document.getElementById("root")
);
