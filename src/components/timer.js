import React, { Component } from "react";

class StopWatch extends Component {
handleAdd=()=>{
  
}
  
  render() {
    return (
      <div className="background-style">
        <div className="time-style">
          <h1><time>00:00:00:00</time></h1>
         
        </div>

        <p>SPLIT TIME</p>
        <div>
          <button className="button-style" onClick={this.handleAdd}>Start</button>
          <button className="button-style-1">Split</button>
          <button className="button-style-1">Reset</button>
        </div>
      </div>
    );
  }
}
export default StopWatch;
