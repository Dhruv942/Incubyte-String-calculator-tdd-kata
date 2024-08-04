const StringCalculator = require("./StringCalculator");

test("empty string should return 0", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});
