"use strict";
var assert = require("power-assert");
describe("Classes", (function() {
  var Person = function Person(name) {
    this.name = name;
  };
  ($traceurRuntime.createClass)(Person, {getName: function() {
      return this.name;
    }}, {});
  var Employee = function Employee(name, position) {
    $traceurRuntime.superCall(this, $Employee.prototype, "constructor", [name]);
    this.position = position;
  };
  var $Employee = Employee;
  ($traceurRuntime.createClass)(Employee, {getInfo: function() {
      return {
        name: this.getName(),
        position: this.position
      };
    }}, {}, Person);
  it("constructor", (function() {
    var bob = new Employee("Bob", "bucho");
    assert.deepEqual(bob.getInfo(), {
      name: "Bob",
      position: "bucho"
    });
  }));
}));

//# sourceMappingURL=classes.map
