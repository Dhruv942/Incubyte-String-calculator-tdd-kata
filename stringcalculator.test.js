const { add } = require("./Stringcalculator");

test("empty string returns 0", () => {
  expect(add("")).toBe(0); //empty string return 0
});

test("single number returns the number", () => {
  expect(add("2")).toBe(2); // single number output
});
test("sum of the number returns the Sum", () => {
  expect(add("1,2")).toBe(3); // comma and sum
});

test("number with new line", () => {
  expect(add("1,2\n,3")).toBe(6); // new line convert this type  1+2+3 =6;
});

test("custom delimiter returns sum of numbers", () => {
  expect(add("//;\n1;2")).toBe(3); // custom delimiter and sum
});

test("negative numbers throw an error", () => {
  expect(() => add("1,-2,-23")).toThrow(
    "negative numbers not allowed: -2, -23"
  ); // expect error for negative numbers
});

test("ingore 1000 number", () => {
  expect(add("1,1001,1002,5")).toBe(6); // custom delimiter and sum
});

/*
//const { add } = require("./Stringcal");

// Test for custom delimiters
//console.log("Test: empty string");
//console.log(add(""));

console.log("Test: single number");
console.log(add("1"));

// Test for multiple numbers with commas
console.log("Test: multiple numbers with commas");
console.log(add("1,2")); // Expected output: 3

// Test for new lines
console.log("Test: numbers separated by new lines");
console.log(add("1\n2,3,4")); // Expected output: 6

console.log("Test: custom delimiter");
console.log(add("//;\n1;2")); // Expected output: 3 */
