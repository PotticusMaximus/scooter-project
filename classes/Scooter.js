const User = require("../classes/User");

class Scooter {
  static nextSerial = 0;
  constructor() {
    this.station = null;
    this.user = null;
    this.charge = 100;
    this.isBroken = false;
    Scooter.nextSerial++;
    this.serial = Scooter.nextSerial;
  }

  rent(user) {
    if (this.charge < 20) {
      throw new Error("scooter needs to charge");
    }
    if (this.isBroken === true) {
      throw new Error("scooter needs repair");
    }
  }
}

module.exports = Scooter;
