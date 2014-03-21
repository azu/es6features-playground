"use strict";
var assert = require("power-assert");
var MyClass = (function() {
  var key = Symbol("key");
  function MyClass(privateData) {
    $traceurRuntime.setProperty(this, key, "this is private");
  }
  MyClass.prototype = {doStuff: function() {
      return this[$traceurRuntime.toProperty(key)];
    }};
  return MyClass;
})();
describe("Symbols", (function() {
  it("use symbols as private key", (function() {
    var c = new MyClass("hello");
    assert(c[$traceurRuntime.toProperty("key")] === undefined);
  }));
}));

//# sourceMappingURL=Symbols.map
