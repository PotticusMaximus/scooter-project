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
    this.registeredUsers = [];
  }

  registerUser(username, password, age) {
    if (age < 18) {
      throw new Error("Too young to register");
    }
    if (this.registeredUsers.some((user) => user.username === username)) {
      throw new Error("User already registered");
    }
    this.registeredUsers.push(new User(username, password, age));
    console.log(
      "user has been registered",
      this.registeredUsers[this.registeredUsers.length - 1]
    );
    return this.registeredUsers[this.registeredUsers.length - 1];
  }
  loginUser(username, password) {
    const user = this.registeredUsers.find(
      (user) => user.username === username
    );
    if (user === undefined) {
      throw new Error("User not found");
    }
    if (user && user.getPassword() === password) {
      user.login(password);
      console.log("user has been logged in");
      return true;
    } else {
      throw new Error("Username or password incorrect");
    }
  }
  //logout
  logoutUser(username) {
    const user = this.registeredUsers.find(
      (user) => user.username === username
    );
    if (user === undefined) {
      throw new Error("No such user logged in");
    }
    if (user && user.loggedIn === true) {
      user.logout();
      console.log("user has been logged out");
      return true;
    } else {
      throw new Error("User not logged in");
    }
  }
}

module.exports = ScooterApp;
