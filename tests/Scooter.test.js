const Scooter = require("../classes/Scooter");
const User = require("../classes/User");

const scooter1 = new Scooter();
const scooter2 = new Scooter();

//typeof scooter === object
describe("scooter object", () => {
  test("Scooter class should create Scooter instance", () => {
    expect(scooter1).toBeInstanceOf(Scooter);
  });

  it("Correctly Assigns a new incremented serial number", () => {
    expect(scooter2.serial).toBe(2);
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
