import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      curTime: null
    };

    this.uniqueRandomNumbers = new Set();
  }

  _getUniqueRandomNumber = (min = 1, max = 5000) => {
    let deepNumber = Math.floor(min + Math.random() * (max + 1 - min));
    window.console.log("repeated numbers: ");
    while (this.uniqueRandomNumbers.has(deepNumber)) {
      // do something to fetch a unique number
      window.console.log(deepNumber);
      deepNumber = Math.floor(min + Math.random() * (max + 1 - min));
    }
    this.uniqueRandomNumbers.add(deepNumber);
    return deepNumber;
  };

  _updateNumber = () => {
    if (this.uniqueRandomNumbers.size >= 5000) {
      window.console.log("This is all there for a life.");
      this.setState({
        finalMessage: "Get a life"
      });
      clearInterval(this.interval);
      return;
    }

    let deepNumber = this._getUniqueRandomNumber();
    this.setState({
      curTime: new Date().toLocaleString(),
      deepNumber
    });
    //  Math.random() * (max - min + 1) + min; This is for decimals
  };

  componentDidMount() {
    this.interval = setInterval(this._updateNumber, 20);
  }

  componentWillUnmount() {
    window.console.log("clearInterval");
    clearInterval(this.interval);
  }

  // use componentDidUpdate to update the set?

  render() {
    return (
      <div>
        <h2>{this.state.curTime}</h2>
        <h2>
          {this.state.finalMessage
            ? this.state.finalMessage
            : this.state.deepNumber}
        </h2>
      </div>
    );
  }
}

export default Timer;
