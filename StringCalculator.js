class StringCalculator {
  constructor() {
    // this will track the number of times add method is called
    this.addInvocationCount = 0;
  }
  /**
   * method to add all the numbers provided to it
   * @param {String} numbers | comma seperated numbers
   * @returns {Number} sum of all numbers according to the logic
   */
  add(numbers) {
    this.addInvocationCount++;
    if (this.isEmpty(numbers)) {
      return 0; // Rule #1: Return 0 for an empty string
    }

    let nums = this.parseNumbers(numbers);
    this.handleNegatives(nums); // Rule #5: Check for negative numbers
    nums = this.ignoreBigNumbers(nums); // Rule #9: Ignore numbers > 1000
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
      let customDelimiter;
      const parts = numbers.split("\n");
      const delimiterLine = parts.shift(); // e.g., "//[***]" or "//;"

      // Support for delimiters of any length
      if (delimiterLine.startsWith("//[")) {
        customDelimiter = delimiterLine.substring(3, delimiterLine.length - 1);
      } else {
        customDelimiter = delimiterLine.substring(2); // Fallback for single char delimiter
      }

      // Create a new regex that includes both the custom delimiter and the newline,
      // making sure to escape any special regex characters in the custom delimiter.
      const escapedDelimiter = this.escapeRegExp(customDelimiter);
      delimiter = new RegExp(`${escapedDelimiter}|\\n`);

      numbersToProcess = parts.join("\n");
    }

    // Split the numbers, parse them, and handle potential empty strings from trailing delimiters
    return numbersToProcess.split(delimiter).map((num) => {
      const parsedNum = parseInt(num.trim(), 10);
      return isNaN(parsedNum) ? 0 : parsedNum;
    });
  }

  /**
   * Checks for negative numbers and throws an exception if any are found.
   * @param {Number[]} numbers - Array of numbers to check.
   * @throws {Error} If negative numbers are present.
   */
  handleNegatives(numbers) {
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }
  }

  /**
   * Escapes special characters in a string for use in a regular expression.
   * @param {String} string - The string to escape.
   * @returns {String} The escaped string.
   * @private
   */
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }

  /**
   * Filters out numbers bigger than 1000.
   * @param {Number[]} numbers - Array of numbers.
   * @returns {Number[]} A new array with numbers less than or equal to 1000.
   */
  ignoreBigNumbers(numbers) {
    return numbers.filter((num) => num <= 1000);
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

  /**
   * Returns how many times the add() method was invoked.
   * @returns {Number} The invocation count.
   */
  getCalledCount() {
    return this.addInvocationCount;
  }
}

module.exports = StringCalculator;
