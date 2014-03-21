var assert = require("power-assert");
var sinon = require("sinon");
describe("Generators", (function() {
  var stub;
  beforeEach((function() {
    stub = sinon.stub(console, "log");
  }));
  afterEach((function() {
    stub.restore();
  }));
  it("should call", (function() {
    var fibonacci = {};
    $traceurRuntime.setProperty(fibonacci, Symbol.iterator, function() {
      var pre,
          cur,
          temp;
      return $traceurRuntime.generatorWrap(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              pre = 0, cur = 1;
              $ctx.state = 9;
              break;
            case 9:
              temp = pre;
              pre = cur;
              cur += temp;
              $ctx.state = 6;
              break;
            case 6:
              $ctx.state = 2;
              return cur;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 9;
              break;
            default:
              return $ctx.end();
          }
      }, this);
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

//# sourceMappingURL=generators.map
