const StringCalculator = require("./Stringcal");
const calculator = new StringCalculator();

function checkResult(expression, expected) {
  test(`should evaluate "${expression}" to ${expected}`, () => {
    expect(calculator.add(expression)).toBe(expected);
  });
}

checkResult("", 0);
checkResult("42", 42);
checkResult("1,2", 3);
checkResult("1,2\n", 3);
