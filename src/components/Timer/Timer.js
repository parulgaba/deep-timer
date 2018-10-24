import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      curTime: null
    };
    this.uniqueArray = [];
  }

  _insertInSortedArray = num => {
    let i = 0;
    while (i < this.uniqueArray.length && this.uniqueArray[i] < num) {
      i++;
    }
    this.uniqueArray.splice(i, 0, num);
  };

  _getUniqueRandomNumber = (min = 1, max = 50) => {
    let deepNumber = Math.floor(min + Math.random() * (max + 1 - min));

    while (this.uniqueArray.indexOf(deepNumber) >= 0) {
      deepNumber = Math.floor(min + Math.random() * (max + 1 - min));
    }
    this._insertInSortedArray(deepNumber);
    return deepNumber;
  };

  _updateNumber = () => {
    if (this.uniqueArray.length >= 5000) {
      this.setState({
        finalMessage: "Get a life",
        curTime: new Date().toLocaleString()
      });
      clearInterval(this.interval);
      return;
    }

    this.setState({
      curTime: new Date().toLocaleString(),
      deepNumber: this._getUniqueRandomNumber()
    });
  };

  componentDidMount() {
    this.interval = setInterval(this._updateNumber, 2000);
  }

  componentWillUnmount() {
    window.console.log(
      "clearInterval is not being called from here as we never unmount the component"
    );
    clearInterval(this.interval);
  }

  // use componentDidUpdate to update the set?

  render() {
    return (
      <div>
        <h2>{this.state.curTime}</h2>
        <h2 className="animation">{this.uniqueArray.size}</h2>
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
