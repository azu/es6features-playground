"use strict";
var assert = require("power-assert");
describe("Map", (function() {
  it("is map", (function() {
    var s = new Set();
    var m = new Map();
    m.set("hello", 42);
    m.set(s, 34);
    assert(m.get(s) === 34);
  }));
}));

//# sourceMappingURL=map.map
