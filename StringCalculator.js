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
