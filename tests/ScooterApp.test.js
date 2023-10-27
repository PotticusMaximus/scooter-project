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

// log out

// rent scooter

// dock scooter
