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
});
