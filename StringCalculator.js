class StringCalculator {
  /**
   * method to add all the numbers provided to it
   * @param {String} numbers | comma seperated numbers
   * @returns {Number} sum of all numbers according to the logic
   */
  add(numbers) {
    if (this.isEmpty(numbers)) {
      return 0; // Rule #1: Return 0 for an empty string
    }

    return this.sumOfNumbers(
      numbers.split(",").map((num) => parseInt(num, 10))
    );
  }

  /**
   * checks whether string is empty
   * @param {String} numbers
   * @returns {Boolean}
   */
  isEmpty(numbers) {
    return numbers.trim() === "";
  }

  sumOfNumbers(numbers) {
    return numbers.reduce((number, sum) => sum + number, 0);
  }
}

module.exports = StringCalculator;
