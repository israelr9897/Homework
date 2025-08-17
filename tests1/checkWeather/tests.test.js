import assert from "node:assert";
import test from "node:test";
import { isSafeToHike } from "./functions.js";

test.describe("check weather", () => {
  test("isInputRegular", () => {
    assert.deepStrictEqual(Object.keys(isSafeToHike(30, 40)).length, 2);
  });

  test("isNoInt", () => {
    assert.deepStrictEqual(isSafeToHike([] || " " || {}), {
      msg: "No value of type entered",
    });
  });

  test("isNull", () => {
    assert.deepStrictEqual(isSafeToHike(null, null), { msg: "no number was entered" });
  });

  // test("isZero", () => {
  //   assert.deepStrictEqual(kmToMeters(0), 0);
  // });

  // test("isNegativ", () => {
  //   assert.deepStrictEqual(kmToMeters(-1), -1000);
  // });
});
