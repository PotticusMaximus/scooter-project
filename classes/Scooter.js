class Scooter {
  static nextSerial = 0;
  constructor(station, user, charge = 100, isBroken = false) {
    this.station = station;
    this.user = user;
    this.charge = charge;
    this.isBroken = isBroken;
    Scooter.nextSerial++;
    this.serial = Scooter.nextSerial;
  }
}

module.exports = Scooter;
