"use strict";
var assert = require("power-assert");
describe("WeakSet", (function() {
  it("is weakset", (function() {
    var ws = new WeakSet();
    ws.add({data: 42});
    assert(ws.size === undefined);
  }));
}));

//# sourceMappingURL=weakset.map
