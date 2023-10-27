const Scooter = require("../classes/Scooter");
const User = require("../classes/User");
const ScooterApp = require("../classes/ScooterApp");

const scooterApp = new ScooterApp();
// ScooterApp tests here
describe("Scooter App Initialisation", () => {
  test("Initialises with original 7 station list", () => {
    expect(scooterApp.stations).toEqual({
      "Inner Harbor": [],
      "Fells Point": [],
      "Federal Hill": [],
      "Canton Square": [],
      "JH University": [],
      "Mount Vernon": [],
      "Penn Station": [],
    });
  });
  test("Registered users initialises with an object", () => {
    expect(typeof scooterApp.registeredUsers).toBe("object");
  });
});
// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
  test("Cannot register if under 18", () => {
    expect(() => {
      scooterApp.registerUser("Youth", "qte7898", 16);
    }).toThrow("Too young to register");
  });
});

// log in
describe("User login tests", () => {
  test("Finds user in registeredUsers[]", () => {
    expect(scooterApp.loginUser("Joe Bloggs", "test123")).toBe(true);
  });
  test("Throw error if wrong password provided", () => {
    expect(() => {
      scooterApp.loginUser("Joe Bloggs", "test127");
    }).toThrow("Username or password incorrect");
  });
  test("Throw error if user not found", () => {
    expect(() => {
      scooterApp.loginUser("Joseph Bloggs", "test123");
    }).toThrow("User not found");
  });
});
// log out
describe("User logout tests", () => {
  test("Log member out if found and logged in", () => {
    expect(scooterApp.logoutUser("Joe Bloggs")).toBe(true);
  });

  test("Throw error if user not found", () => {
    expect(() => {
      scooterApp.logoutUser("Joseph Bloggs");
    }).toThrow("No such user logged in");
  });
});

// rent scooter

// dock scooter
