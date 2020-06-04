const axios = require("axios");

const calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Rifqi" };
    user.lastName = "Abrory";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "err ::" + err),
};

module.exports = calculator;
