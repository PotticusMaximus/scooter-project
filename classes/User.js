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
}

module.exports = User;
