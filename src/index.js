import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import Exo29 from "./composant/Exo29";
//import Exo30 from "./composant/Exo30";
// Exo31 from "./composant/Exo31";
//import Exo32P from "./composant/Exo32P";
//import Exo32E from "./composant/Exo32E";
import Exo33E from "./composant/Exo33E";
import Exo33P from "./composant/Exo33P";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Exo33P />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
