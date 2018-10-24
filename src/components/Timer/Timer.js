import React, { Component } from "react";
import "./Timer.css";

import UniqueRandomNumberGenerator from "../../utils/random-number-generator-util";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      curTime: new Date().toLocaleString()
    };
    this.myGenerator = new UniqueRandomNumberGenerator();
  }

  /**
   * Sets the interval to 2 seconds and saves its id to clear later.
   */
  componentDidMount() {
    this.interval = setInterval(this._updateNumber, 2000);
  }

  /**
   * Keeps an eye on range and calls _insertInSortedArray for current random number.
   */
  componentDidUpdate() {
    if (this.myGenerator.checkLimit()) {
      return;
    }
    this.myGenerator.insertInSortedArray(this.state.deepNumber);
  }

  /**
   * Stops interval.
   */
  _stopTimer = () => {
    // Truncate the array, clear interval
    this.myGenerator.resetGeneratorArray();
    clearInterval(this.interval);
  };

  /**
   * Updates the state of component with a new random number until the range is exhausted.
   */
  _updateNumber = () => {
    if (this.myGenerator.checkLimit()) {
      this._stopTimer();
      this.setState({
        curTime: "Get a life"
      });
      return;
    }

    this.setState({
      curTime: new Date().toLocaleString(),
      deepNumber: this.myGenerator.getNextRandomNumber()
    });
  };

  /**
   * Displays time after each interval and the random number.
   */
  render() {
    return (
      <div>
        <div className="time">{this.state.curTime}</div>
        <div className="random-number">{this.state.deepNumber}</div>
      </div>
    );
  }
}

export default Timer;
