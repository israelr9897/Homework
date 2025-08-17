import assert from "node:assert";
import test from "node:test";
import { kmToMeters } from "./distanceUtils.js";
import { caloriesBurned } from "./calories.js";

test.describe("kmToMeters", () => {
  test("isInt", () => {
    assert.deepStrictEqual(Number.isInteger(kmToMeters(890)), true);
  });

  test("isNoInt", () => {
    assert.deepStrictEqual(
      kmToMeters([1, 2, 3] || " " || { int: 1 }),
      "No value of type entered"
    );
  });

  test("isNull", () => {
    assert.deepStrictEqual(kmToMeters(), "no number was entered");
  });

  test("isZero", () => {
    assert.deepStrictEqual(kmToMeters(0), 0);
  });

  test("isNegativ", () => {
    assert.deepStrictEqual(kmToMeters(-1), -1000);
  });
});

test.describe("caloriesBurned", () => {
  test("regulerInput", () => {
    assert.deepStrictEqual(typeof caloriesBurned(8, 8), "number");
  });

  test("isZeroOrNegativ", () => {
    assert.deepStrictEqual(
      caloriesBurned(0, 0 || -1, -1),
      "Please enter a number greater than 0"
    );
  });

  test("isDecimal", () => {
    assert.deepStrictEqual(caloriesBurned(1.1, 2.2), 2.5071200000000005);
  });
});
