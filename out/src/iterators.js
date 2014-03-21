"use strict";
var assert = require("power-assert");
var sinon = require("sinon");
describe("Iterator", (function() {
  var stub;
  beforeEach((function() {
    stub = sinon.stub(console, "log");
  }));
  afterEach((function() {
    stub.restore();
  }));
  it("should iterate", (function() {
    var fibonacci = {};
    $traceurRuntime.setProperty(fibonacci, Symbol.iterator, function() {
      var pre = 0,
          cur = 1;
      return {next: function() {
          var $__2;
          ($__2 = [cur, pre + cur], pre = $__2[0], cur = $__2[1], $__2);
          return {
            done: false,
            value: cur
          };
        }};
    });
    for (var $__0 = fibonacci[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      var n = $__1.value;
      {
        if (n > 1000) {
          break;
        }
        console.log(n);
      }
    }
    assert(stub.called);
  }));
}));

//# sourceMappingURL=iterators.map
