import { describe, test } from "node:test";
import assert from "node:assert";
import {maxOrNull} from "../exe2.js"

describe("maxOrNull", () => {
    test("input list", () => {
        assert.deepStrictEqual(maxOrNull([1,2,3]), 3)
    })
    test("null", () => {
        assert.deepStrictEqual(maxOrNull([]), null)
    })
    test("negativ", () => {
        assert.deepStrictEqual(maxOrNull([1, -4, 2]), 2)
    })
    test(" all negativ", () => {
        assert.deepStrictEqual(maxOrNull([-5, -2]), -2)
    })
})