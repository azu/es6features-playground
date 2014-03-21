"use strict";
var assert = require("power-assert");
describe("Destructuring", (function() {
  function getASTNode() {
    return {
      op: "1st operation",
      "lhs": {op: "lhs operation"},
      "rhs": {op: "rhs operation"}
    };
  }
  it("list matching", (function() {
    var $__0 = [1, 2, 3],
        a = $__0[0],
        b = $__0[2];
    assert(a === 1);
    assert(b === 3);
  }));
  it("object matching", (function() {
    var $__0 = getASTNode(),
        a = $__0.op,
        b = $__0.lhs.op,
        c = $__0.rhs;
    var ast = getASTNode();
    assert.deepEqual(a, ast.op);
    assert.deepEqual(b, ast.lhs.op);
    assert.deepEqual(c, ast.rhs);
  }));
  it("object matching shorthand", (function() {
    var $__0 = getASTNode(),
        op = $__0.op,
        lhs = $__0.lhs,
        rhs = $__0.rhs;
    var ast = getASTNode();
    assert.deepEqual(op, ast.op);
    assert.deepEqual(lhs, ast.lhs);
    assert.deepEqual(rhs, ast.rhs);
  }));
  it(" Can be used in parameter position", (function() {
    function g($__0) {
      var x = $__0.name;
      assert(x === 5);
    }
    g({name: 5});
  }));
  it("Fail-soft destructuring", (function() {
    var a = [][0];
    assert(a === undefined);
  }));
}));

//# sourceMappingURL=destructuring.map
