const reverse = (str) => str.split("").reverse().join("");
const reverseWithUpperCase = (str) =>
  str.toLowerCase().split("").reverse().join("");

module.exports = { reverse, reverseWithUpperCase };
