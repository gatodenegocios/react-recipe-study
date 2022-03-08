import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App/App";
import { ErrorBoundary } from "./components/error_boundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
