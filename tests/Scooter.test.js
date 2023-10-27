const Scooter = require("../classes/Scooter");
const User = require("../classes/User");

const scooter1 = new Scooter("Federal Hill", "Mike P", 100, false);

//typeof scooter === object
describe("scooter object", () => {
  test("Scooter class should create Scooter instance", () => {
    expect(scooter1).toBeInstanceOf(Scooter);
  });

  it("Correctly Assigns given station", () => {
    expect(scooter1.station).toBe("Federal Hill");
  });

  it("Correctly Assigns given User", () => {
    expect(scooter1.user).toBe("Mike P");
  });

  it("Correctly Assigns a new incremented serial number", () => {
    expect(scooter1.serial).toBe(Scooter.nextSerial);
  });

  it("Correctly Assigns full charge", () => {
    expect(scooter1.charge).toBe(100);
  });

  it("Correctly creates a fully maintained scooter", () => {
    expect(scooter1.isBroken).toBe(false);
  });
});
//Method tests
describe("scooter methods", () => {
  // tests here!
  //rent method
  //dock method
  //requestRepair method
  //charge method
});
