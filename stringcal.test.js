const StringCalculator = require("./Stringcal");
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
  describe("Handling single number", () => {
    checkResult("2", 2);
  });

  describe("comma separator", () => {
    checkResult("1,2", 3);
  });

  describe("comma-separator and newline handling", () => {
    checkResult("1,2\n", 3);
    checkResult("1,2\n,3\n,4\n", 10);
  });

  describe("custom separator", () => {
    checkResult("1,2\n", 3);
  });
  describe("negative number handling", () => {
    checkException("1,-2", "negative numbers not allowed -2");
  });
});
