const isAnagram = require("../functions/anagram");

// toEqual
test("isAnagram function is exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

// toBeTruthy
test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

// toBeTruthy
test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

// toBeFalsy
test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
