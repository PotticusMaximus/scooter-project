class User {
  #password;
  constructor(username, password, age) {
    this.username = username;
    this.#password = password;
    this.age = age;
    this.loggedIn = false;
  }
  getPassword() {
    return this.#password;
  }
  login(password) {
    if (password !== this.#password) {
      throw new Error("incorrect password");
    } else {
      this.loggedIn = true;
    }
  }
  logout() {
    if (this.loggedIn === false) {
      throw new Error("User not logged in");
    } else {
      this.loggedIn = false;
      return "User successfully logged out";
    }
  }
}

module.exports = User;
