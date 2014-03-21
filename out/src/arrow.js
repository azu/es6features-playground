"use strict";
var assert = require("power-assert");
var sinon = require("sinon");
describe("ArrowFunction", (function() {
  describe("Expression bodies", (function() {
    var evens = [2, 4, 6];
    it("evens + 1", (function() {
      var odds = evens.map((function(v) {
        return v + 1;
      }));
      assert.deepEqual(odds, [3, 5, 7]);
    }));
    it("evens + index", (function() {
      var nums = evens.map((function(v, i) {
        return v + i;
      }));
      assert.deepEqual(nums, [2, 4 + 1, 6 + 2]);
    }));
  }));
  describe("Statement bodies", (function() {
    var nums = [1, 5, 8, 10, 12, 15];
    it("nums push", (function() {
      var fives = [];
      nums.forEach((function(v) {
        if (v % 5 === 0) {
          fives.push(v);
        }
      }));
      assert.deepEqual(fives, [5, 10, 15]);
    }));
  }));
  describe("Lexical this", (function() {
    var stub;
    beforeEach((function() {
      stub = sinon.spy(console, "log");
    }));
    afterEach((function() {
      stub.restore();
    }));
    it("has lexical this", (function() {
      var bob = {
        _name: "Bob",
        _friends: ["Jorge", "Smith"],
        printFriends: function() {
          var $__0 = this;
          this._friends.forEach((function(f) {
            return console.log($__0._name + " knows " + f);
          }));
        }
      };
      bob.printFriends();
      sinon.assert.calledTwice(stub);
      assert(/Bob/.test(stub.getCall(1).args[0]));
    }));
  }));
}));

//# sourceMappingURL=arrow.map
