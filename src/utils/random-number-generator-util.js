export default class UniqueRandomNumberGenerator {
  constructor(min, max) {
    this.uniqueArray = [];
    this.min = min || 0;
    this.max = max || 5000;
  }

  /**
   * Maintains an ordered array such that collisions are
   * identified faster while generating the next random number.
   *
   * @param {number} num - The next number to be inserted in list of unique elements.
   */
  insertInSortedArray = num => {
    let i = 0;
    while (i < this.uniqueArray.length && this.uniqueArray[i] < num) {
      i++;
    }
    this.uniqueArray.splice(i, 0, num);
  };

  /**
   * Gets a unique random number within given range.
   *
   * @returns {number} - The unique random number.
   */
  getNextRandomNumber = () => {
    let nextNumber;

    do {
      nextNumber = Math.floor(
        this.min + Math.random() * (this.max + 1 - this.min)
      );
    } while (this.uniqueArray.indexOf(nextNumber) >= 0);

    return nextNumber;
  };

  checkLimit = () => {
    return this.uniqueArray.length === this.max;
  };

  resetGeneratorArray = () => {
    this.uniqueArray.length = 0;
  };
}
