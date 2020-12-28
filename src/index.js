import React from "react";
import ReactDOM from "react-dom";
import "./Style.scss";

//components
import Timer from "./components/timer";


function App() {
  return(
    <Timer></Timer>

  );
}

ReactDOM.render(<App />, document.getElementById("root"));
