class StringCalculator {
  constructor() {}
  /**
   * method to add all the numbers provided to it
   * @param {String} numbers | comma seperated numbers
   * @returns {Number} sum of all numbers according to the logic
   */
  add(numbers) {
    if (this.isEmpty(numbers)) {
      return 0; // Rule #1: Return 0 for an empty string
    }
  }

  /**
   * checks whether string is empty
   * @param {String} numbers
   * @returns {Boolean}
   */
  isEmpty(numbers) {
    return numbers.trim() === "";
  }
}

module.exports = StringCalculator;
