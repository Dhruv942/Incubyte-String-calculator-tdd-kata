const StringCalculator = require("./Stringcalculator");
const calculator = new StringCalculator();

describe("StringCalculator", () => {
  function checkResult(expression, expected) {
    test(`should evaluate "${expression}" to ${expected}`, () => {
      expect(calculator.add(expression)).toBe(expected);
    });
  }

  function checkException(expression, expectedMessage) {
    test(`should throw exception for "${expression}"`, () => {
      expect(() => calculator.add(expression)).toThrowError(expectedMessage);
    });
  }

  describe("basic functionality", () => {
    checkResult("", 0);
  });

  describe("handling single number", () => {
    checkResult("2", 2);
  });

  describe("comma separator", () => {
    checkResult("1,2", 3);
  });

  describe("comma-separator and newline handling", () => {
    checkResult("1,2\n3", 6);
  });
  describe("comma-separator and newline handling", () => {
    checkResult("1,2\n3,4\n", 10);
  });

  describe("custom separator", () => {
    checkResult("//;\n1;2", 3);
  });

  describe("negative number not allowed", () => {
    checkException("1,-2", "negative numbers not allowed -2");
  });

  describe("multiple negative numbers not allowed", () => {
    checkException("1,-2,-3", "negative numbers not allowed -2, -3");
  });
  describe(" separator", () => {
    checkResult("1000,2,1001", 1002);
  });

  describe("Delimiters can be of any length  “//[delimiter]\n” ", () => {
    checkResult("//[***]\n1***2***3", 6);
  });

  describe("multiple delimiters", () => {
    checkResult("//[*][%]\n1*2%3%4", 10);
  });
  describe("Delimiters can be of any length", () => {
    checkResult("//[***]\n1***2***3", 6);
  });
});
