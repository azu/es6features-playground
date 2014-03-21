"use strict";
var assert = require("power-assert");
describe("Default", (function() {
  it("default parameter value", (function() {
    function f(x) {
      var y = arguments[1] !== (void 0) ? arguments[1] : 12;
      return x + y;
    }
    assert(f(3) == 15);
  }));
}));
describe("Rest", (function() {
  it("...parameter", (function() {
    function f(x) {
      for (var y = [],
          $__0 = 1; $__0 < arguments.length; $__0++)
        y[$__0 - 1] = arguments[$__0];
      return x * y.length;
    }
    assert(f(3, "hello", true) === 6);
  }));
}));
describe("Spread", (function() {
  it("pass each elem of array as argument", (function() {
    function f(x, y, z) {
      return x + y + z;
    }
    assert(f.apply(null, $traceurRuntime.toObject([1, 2, 3])) === 6);
  }));
}));

//# sourceMappingURL=default_rest_speread.map
