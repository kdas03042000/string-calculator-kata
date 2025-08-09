# String Calculator

A JavaScript calculator that performs operations on string inputs with various delimiters.

## Features

1. **Basic Operations**
   - Handles empty strings (returns 0)
   - Processes single numbers
   - Adds multiple numbers separated by commas
   - Supports unlimited number of inputs

2. **Delimiter Support**
   - Default delimiters: comma (,) and newline (`\n`)
   - Custom delimiter definition using `//` syntax
   - Example: `"//;\n1;2"` uses semicolon as delimiter
   - Supports delimiters of any length (e.g., `"//[***]\n1***2***3"`)
   - Allows multiple custom delimiters (e.g., `"//[*][%]\n1*2%3"`)
   - Supports multiple delimiters of varying lengths

3. **Number Handling**
   - Ignores numbers larger than 1000
   - Throws exception for negative numbers
   - Lists all negative numbers in error message
   - Trims whitespace around numbers

4. **Additional Features**
   - Tracks number of times add() method is called
   - Returns count via getCalledCount()

## Example Usage

```javascript
const calculator = new StringCalculator();

calculator.add("1,2,3");         // Returns 6
calculator.add("1\n2,3");        // Returns 6
calculator.add("//;\n1;2;3");    // Returns 6
calculator.add("//[***]\n1***2"); // Returns 3
calculator.add("//[*][%]\n1*2%3"); // Returns 6
```

## Error Handling

```javascript
calculator.add("-1,2");     // Throws: "negatives not allowed: -1"
calculator.add("1,-2,-3");  // Throws: "negatives not allowed: -2,-3"
```

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```