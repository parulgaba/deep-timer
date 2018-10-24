import React, { Component } from "react";

import Timer from "./Timer/Timer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Timer className="bounce" />
        </header>
      </div>
    );
  }
}

export default App;
