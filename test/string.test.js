const str = require("../functions/String");

// toBeDefined
test("reverse function exists", () => {
  expect(str.reverse).toBeDefined();
});

// toEqual
test("String reverse", () => {
  expect(str.reverse("hello")).toEqual("olleh");
});

// toEqual with uppercase
test("String reverse with uppercase", () => {
  expect(str.reverseWithUpperCase("Hello")).toEqual("olleh");
});
