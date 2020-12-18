import React from "react";
import ReactDOM from "react-dom";
import "./Style.scss";

//components
import StopWatch from './components/timer';


function App() {
  return <StopWatch></StopWatch>;
}

ReactDOM.render(<App />, document.getElementById("root"));
