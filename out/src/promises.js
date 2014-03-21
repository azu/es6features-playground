"use strict";
var assert = require("power-assert");
describe("promises", (function() {
  it("is promise", (function() {
    function promisefy() {
      var value = arguments[0] !== (void 0) ? arguments[0] : 0;
      return Promise.resolve(value);
    }
    return promisefy(1000).then((function(value) {
      assert(value === 1000);
    }));
  }));
}));

//# sourceMappingURL=promises.map
