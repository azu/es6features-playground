"use strict";
var sinon = require("sinon");
var assert = require("power-assert");
it("Enhanced Object Literals", (function() {
  var handler = sinon.spy();
  var obj = {handler: handler};
  obj.handler();
  assert(handler.called);
}));

//# sourceMappingURL=object_literal.map
