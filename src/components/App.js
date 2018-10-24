import React, { Component } from "react";

import Timer from "./Timer/Timer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="timer">
        <Timer />
      </div>
    );
  }
}

export default App;
