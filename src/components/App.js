import React, { Component } from "react";

import Timer from "./Timer/Timer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
