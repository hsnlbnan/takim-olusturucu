import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PrivacyPolicy } from "./pages/privacy-policy";

const currentPath = window.location.pathname;
const link = "/privacy-policy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {currentPath === link ? <PrivacyPolicy /> : <App />}
  </React.StrictMode>
);
