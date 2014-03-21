"use strict";
var assert = require("power-assert");
describe("Set", ()=> {
    it("is set", ()=> {
        var s = new Set();
        s.add("hello");
        s.add("goodbye");
        s.add("hello");
        assert(s.size === 2);
        assert(s.has("hello"));
    });
});