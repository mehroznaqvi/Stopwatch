                                                                                                                                                                            import React, { Component } from "react";

class StopWatch extends Component {
  render() {
    return (
      <div className="background-style">
        <h1>00:00:00:00</h1>
        <p>SPLIT TIME</p>
        <div>  
            <button className="button-style">Start</button>
            <button className="button-style-1">Split</button>
            <button className="button-style-1">Reset</button>
        </div>
      </div>
    );
  }
}
export default StopWatch;
