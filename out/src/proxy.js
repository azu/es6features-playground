"use strict";
var assert = require("power-assert");
describe("Proxy", (function() {
  it("proxying a normal object", (function() {
    var target = {};
    var handler = {get: function(receiver, name) {
        return ("Hello, " + name + "!");
      }};
    var p = new Proxy(target, handler);
    assert(p.world === 'Hello, world!');
  }));
  it("Proxying a function object", (function() {
    var target = function() {
      return 'I am the target';
    };
    var handler = {apply: function(receiver) {
        for (var args = [],
            $__0 = 1; $__0 < arguments.length; $__0++)
          $traceurRuntime.setProperty(args, $__0 - 1, arguments[$traceurRuntime.toProperty($__0)]);
        return 'I am the proxy';
      }};
    var p = new Proxy(target, handler);
    assert(p() === 'I am the proxy');
  }));
}));

//# sourceMappingURL=proxy.map
