const { add } = require("./Stringcalculator");

test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns the number", () => {
  expect(add("2")).toBe(2);
});
test("sum of the number returns the Sum", () => {
  expect(add("1,2")).toBe(3);
});

test("number with new line", () => {
  expect(add("1,2\n,3")).toBe(6);
});

test("custom delimiter returns sum of numbers", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("negative numbers throw an error", () => {
  expect(() => add("1,-2,-23")).toThrow(
    "negative numbers not allowed: -2, -23"
  );
});

test("ingore 1000 number", () => {
  expect(add("1,1001,1002,5")).toBe(6);
});

test("only delimeter and answer give the 0", () => {
  expect(add("// \n")).toBe(0);
});
test("Multiple custom delimiters should return their sum", () => {
  expect(add("//;\n1;2;3;1000")).toBe(1006);
});
