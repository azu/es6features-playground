System.register("../../../src/Modules/math", [], function() {
  "use strict";
  var __moduleName = "../../../src/Modules/math";
  "use strict";
  function sum(x, y) {
    return x + y;
  }
  var pi = 3.141593;
  return {
    get sum() {
      return sum;
    },
    get pi() {
      return pi;
    }
  };
});
"use strict";
var assert = require("power-assert");
var math = System.get("../../../src/Modules/math");
describe("module", (function() {
  it("use module", (function() {
    assert(math.sum(math.pi, math.pi) === 6.283186);
  }));
}));

//# sourceMappingURL=app.map
