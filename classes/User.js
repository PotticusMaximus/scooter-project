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
}

module.exports = User;
