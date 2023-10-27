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
    if (this.user !== null) {
      throw new Error("scooter already rented");
    } else {
      this.user = user;
      console.log(`Scooter rented to ${user}.`);
      return true;
    }
  }
  dock(station) {
    this.station = station;
    this.user = null;
    console.log(`Scooter docked at ${station}, user set to null`);
    return true;
  }
}

module.exports = Scooter;
