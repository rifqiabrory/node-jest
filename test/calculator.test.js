/* Note
CHECKING FOR TRUTHY & FALSY VALUES
1. toBeNull => matches only null
2. toBeUndefined => matches only undefined
3. toBeDefined => is the opposite to toBeUndefined
4. toBeTruthy => matches anything that an if statement treats as true
5. toBeFalsy => mathces anything that an if statement treats as false 
*/

const calculator = require("../functions/calculator");

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabse());

// const initDatabase = () => console.log("Database initialize...");
// const closeDatabse = () => console.log("Database closed...");

const nameCheck = () => console.log("Checking name ..");

describe("Checking name", () => {
  beforeEach(() => nameCheck());

  test("User is John", () => {
    const user = "John";
    expect(user).toBe("John");
  });

  test("User is Foo", () => {
    const user = "Foo";
    expect(user).toBe("Foo");
  });
});

// toBe
test("Calculator: Add 2 + 2 to equals 4 ", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

// not toBe
test("Calculator: Add 2 + 2 to NOT equals 5 ", () => {
  expect(calculator.add(2, 2)).not.toBe(5);
});

// toBeNull
test("should be null", () => {
  expect(calculator.isNull()).toBeNull();
});

// toBeFalsy
test("should be falsy", () => {
  expect(calculator.checkValue(null)).toBeFalsy(); //null, undefined, 0
});

// not toBeFalsy
test("should be falsy", () => {
  expect(calculator.checkValue(2)).not.toBeFalsy();
});

// toEqual
test("User should be Rifqi Abrory object", () => {
  expect(calculator.createUser()).toEqual({
    firstName: "Rifqi",
    lastName: "Abrory",
  });
});

// toBeLessThanOrEqual
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["John", "Brad", "Admin"];
  expect(usernames).toContain("Admin");
});

// Workin with async data
// Promise
test("User fetched name should be Leanne Graham :: Promise", () => {
  expect.assertions(1);
  return calculator.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("User fetched name should be Leanne Graham :: Async await", async () => {
  expect.assertions(1);
  const data = await calculator.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
