const User = require("../classes/User");
const Scooter = require("../classes/Scooter");

class ScooterApp {
  constructor() {
    this.stations = {
      "Inner Harbor": [],
      "Fells Point": [],
      "Federal Hill": [],
      "Canton Square": [],
      "JH University": [],
      "Mount Vernon": [],
      "Penn Station": [],
    };
    this.registeredUsers = {
      "Test user 1": {
        Password: "testPass",
        Age: 999,
        "Payment-method": true,
        Trips: ["Scooter", "date"],
      },
    };
  }
}

module.exports = ScooterApp;
