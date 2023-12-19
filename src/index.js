import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Exo29 from "./composant/Exo29";
import Exo30 from "./composant/Exo30";
import Exo31 from "./composant/Exo31";
import Exo32P from "./composant/Exo32P";
import Exo32E from "./composant/Exo32E";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Exo30 />
    <Exo29 />
    <Exo31 />
    <Exo32P />
    <Exo32E />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
