import React, { Component } from "react";

class StopWatch extends Component {
  render() {
    return (
      <div className="background-style">
        <h1>00:00:00:00</h1>
        <div>  
            <button className="button-style">Start</button>
            <button>Split</button>
            <button>Reset</button>
        </div>
      </div>
    );
  }
}
export default StopWatch;
