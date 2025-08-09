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
});
