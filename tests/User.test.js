const User = require("../classes/User");

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  });
  test("User name is correct", () => {
    expect(user.username).toBe("Joe Bloggs");
  });
  // test password
  test("Password should be private", () => {
    expect(typeof user.password).toBe("undefined");
  });
  test("Password should be a string", () => {
    expect(typeof user.getPassword()).toBe("string");
  });
  test("Password should be correct", () => {
    expect(user.getPassword()).toBe("test123");
  });
  // test age
  test("Age should be a number", () => {
    expect(typeof user.age).toBe("number");
  });
  test("Age is correct", () => {
    expect(user.age).toBe(21);
  });
  test("Logged in should default to false", () => {
    expect(user.loggedIn).toBe(false);
  });
});

// test login

// test logout
