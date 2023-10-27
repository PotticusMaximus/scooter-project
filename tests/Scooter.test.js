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
  test("Scooter can be rented", () => {
    expect(scooter1.rent("Joe Bloggs")).toBe(true);
  });
  test("Throw error if already rented", () => {
    expect(() => scooter1.rent("Mike P")).toThrow("scooter already rented");
  });
  test("Throw error if low battery", () => {
    scooter1.charge = 10;
    expect(() => scooter1.rent("Joe Bloggs")).toThrow(
      "scooter needs to charge"
    );
  });
  test("Throw error if broken", () => {
    scooter1.isBroken = true;
    scooter1.charge = 100;
    expect(() => scooter1.rent("Joe Bloggs")).toThrow("scooter needs repair");
  });

  //dock method
  test("Scooter can be docked", () => {
    expect(scooter1.dock("JH University")).toBe(true);
  });

  //requestRepair method
  //charge method
});
