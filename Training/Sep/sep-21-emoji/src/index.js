import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import X from "./useReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <X />
  </React.StrictMode>
);
