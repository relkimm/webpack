import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./Main";
import "../index.css";

export function App() {
  console.log("APp!!");
  return <Main />;
}

ReactDOM.render(<App />, document.getElementById("root"));
