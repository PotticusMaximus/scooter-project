class Scooter {
  static nextSerial = 0;
  constructor(station, user, charge = 100) {
    this.station = station;
    this.user = user;
    this.charge = charge;
    this.isBroken = false;
    Scooter.nextSerial++;
    this.serial = Scooter.nextSerial;
  }
}

module.exports = Scooter;
