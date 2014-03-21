"use strict";
var assert = require("power-assert");
describe("WeakMap", (function() {
  it("is weakmap", (function() {
    var s = new Set();
    var wm = new WeakMap();
    wm.set(s, {extra: 42});
    assert(wm.size === undefined);
  }));
}));

//# sourceMappingURL=weakmap.map
