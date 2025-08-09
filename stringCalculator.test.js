const StringCalculator = require("./StringCalculator");

describe("StringCalculator", () => {
  let calculator;

  // Initialize a new calculator before each test
  beforeEach(() => {
    calculator = new StringCalculator();
  });

  // Test for rule #1: Empty string should return 0
  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  // Test for rule #1: A single number should return itself
  test("should return the number itself when a single number is given", () => {
    expect(calculator.add("1")).toBe(1);
  });

  // Test for rule #1: Two numbers should return their sum
  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  // Test for rule #2: Handle an unknown amount of numbers
  test("should return the sum of multiple numbers", () => {
    expect(calculator.add("1,2,3,4,5")).toBe(15);
  });

  // Test for rule #3: Handle new lines between numbers
  test("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  // Test for rule #4: Handle new lines between numbers
  test("should handle new lines between numbers", () => {
    expect(calculator.add("//;\n1;2;3")).toBe(6);
  });

  // Test for rule #5: throw error for single negative value
  test("should throw an error for a single negative number", () => {
    expect(() => calculator.add("-1")).toThrow("negatives not allowed: -1");
  });

  // Test for rule #5: throw error for multiple negative value and print their values
  test("should throw an error listing all negative numbers", () => {
    const input = "1,-2,3,-4";
    const expectedError = "negatives not allowed: -2,-4";
    expect(() => calculator.add(input)).toThrow(expectedError);
  });

  // Test for rule #5: throw error for multiple negative values and custom delimiters
  test("should throw an error for negative numbers with custom delimiters", () => {
    const input = "//;\n1;-2;3;-4";
    const expectedError = "negatives not allowed: -2,-4";
    expect(() => calculator.add(input)).toThrow(expectedError);
  });

  // Test for rule #7: return the number of times add was invoked
  test("should track and return the number of times add() was invoked", () => {
    calculator.add("1,2");
    calculator.add("3");
    expect(calculator.getCalledCount()).toBe(2);
  });

  // Test for rule #9: ignore numbers larger than 1000
  test("should ignore a single number bigger than 1000", () => {
    expect(calculator.add("1001")).toBe(0);
  });

  // Test for rule #9: ignore numbers larger than 1000 and sum up up the other numbers
  test("should ignore numbers bigger than 1000 in a list", () => {
    expect(calculator.add("2,1001")).toBe(2);
  });

  // Test for rule #9: ignore multiple large values
  test("should handle multiple numbers over 1000", () => {
    expect(calculator.add("5,1001,6,2000")).toBe(11);
  });
});
