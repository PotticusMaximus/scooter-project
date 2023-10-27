const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  constructor(stations, registeredUsers) {
    this.stations = {
      "Inner Harbor": [],
      "Fells Point": [],
      "Federal Hill": [],
      "Canton Square": [],
      "JH University": [],
      "Mount Vernon": [],
      "Penn Station": [],
    };
    this.registeredUsers = {};
  }
}

module.exports = ScooterApp;
