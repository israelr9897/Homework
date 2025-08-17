import { describe, test } from "node:test"
import assert from "node:assert"
import { sumTo } from "../exe2.js"

describe("sumTo", () => {
    test("zero", () => {
        assert.deepStrictEqual(sumTo(0), 0)
    })
    test("num negativ", () => {
        assert.deepStrictEqual(sumTo(-1), 0)
    })
    test("some num", () => {
        assert.deepStrictEqual(sumTo(4), 10)
    })
})