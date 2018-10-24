import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      curTime: new Date().toLocaleString()
    };
    this.uniqueArray = [];
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
    if (this.uniqueArray.length === 5000) {
      return;
    }
    this._insertInSortedArray(this.state.deepNumber);
  }

  /**
   * Cleaner method.
   */
  _stopTimer = () => {
    // Truncate the array, clear interval
    this.uniqueArray.length = 0;
    clearInterval(this.interval);
  };

  /**
   * Maintains an ordered array such that collisions are
   * identified faster while generating the next random number.
   *
   * @param {number} num - The next number to be inserted in list of unique elements.
   */

  _insertInSortedArray = num => {
    let i = 0;
    while (i < this.uniqueArray.length && this.uniqueArray[i] < num) {
      i++;
    }
    this.uniqueArray.splice(i, 0, num);
  };

  /**
   * Gets a unique random number within given range.
   *
   * @param {number} min - Default to 1.
   * @param {number} max - Default to 5000.
   * @returns {number} - The unique random number.
   */
  _getUniqueRandomNumber = (min = 1, max = 5000) => {
    let deepNumber = Math.floor(min + Math.random() * (max + 1 - min));

    while (this.uniqueArray.indexOf(deepNumber) >= 0) {
      deepNumber = Math.floor(min + Math.random() * (max + 1 - min));
    }

    return deepNumber;
  };

  /**
   * Updates the state of component with a new random number until the range is exhausted.
   */
  _updateNumber = () => {
    if (this.uniqueArray.length === 5000) {
      this._stopTimer();
      return;
    }

    this.setState({
      curTime: new Date().toLocaleString(),
      deepNumber: this._getUniqueRandomNumber()
    });
  };

  /**
   * Displays time after each interval and the random number.
   */
  render() {
    return (
      <div className="col s3 m3">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.state.curTime}</span>
            <span className="card-content">{this.state.deepNumber}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
