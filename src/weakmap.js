"use strict";
var assert = require("power-assert");
describe("WeakMap", ()=> {
    it("is weakmap", ()=> {
        var s = new Set();
        var wm = new WeakMap();
        wm.set(s, {extra: 42});
        assert(wm.size === undefined);
    });
});
