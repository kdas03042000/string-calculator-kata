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

    const nums = this.parseNumbers(numbers);
    return this.sumOfNumbers(nums);
  }

  /**
   * Parses the input string and returns an array of numbers
   * @param {String} numbers - Input string containing numbers with delimiters
   * @returns {Number[]} Array of parsed numbers
   */
  parseNumbers(numbers) {
    let delimiter = /[,\n]/;
    let numbersToProcess = numbers;

    // Check for custom delimiter syntax
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const delimiterLine = parts.shift(); // e.g., "//;"
      delimiter = delimiterLine.substring(2); // e.g., ";"
      numbersToProcess = parts.join("\n");
    }

    return numbersToProcess
      .split(delimiter)
      .map((num) => parseInt(num.trim(), 10));
  }

  /**
   * checks whether string is empty
   * @param {String} numbers
   * @returns {Boolean}
   */
  isEmpty(numbers) {
    return numbers.trim() === "";
  }

  /**
   * Calculates the sum of an array of numbers
   * @param {Number[]} numbers - Array of numbers to sum
   * @returns {Number} The sum of all numbers
   */
  sumOfNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
}

module.exports = StringCalculator;
