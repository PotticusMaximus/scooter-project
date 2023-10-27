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
}

module.exports = Scooter;
