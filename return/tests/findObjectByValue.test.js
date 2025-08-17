import { describe, test } from "node:test";
import assert from "node:assert";
import { findObjectByValue } from "../exe2.js";

describe("findObjectByValue", () => {
  test("clear list", () => {
    assert.deepStrictEqual(maxOrNull(findObjectByValue([], "alice")), "not found");
  });
});
