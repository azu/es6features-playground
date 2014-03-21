"use strict";
var assert = require("power-assert");
describe("Set", (function() {
  it("is set", (function() {
    var s = new Set();
    s.add("hello");
    s.add("goodbye");
    s.add("hello");
    assert(s.size === 2);
    assert(s.has("hello"));
  }));
}));

//# sourceMappingURL=set.map
