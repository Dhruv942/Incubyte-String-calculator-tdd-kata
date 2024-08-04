const StringCalculator = require("./Stringcal");

test("empty string should return 0", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

test("single number should return the number itself", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
});
