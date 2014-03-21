"use strict";
var assert = require("power-assert");
// http://amatiasq.github.io/blog/2014/03/type-new/
describe("Classes", ()=> {
    class Person {
        constructor(name) {
            this.name = name;
        }

        getName() {
            return this.name;
        }
    }
    class Employee extends Person {
        constructor(name, position) {
            super(name);
            this.position = position;
        }

        getInfo() {
            return {
                name: this.getName(),
                position: this.position
            }
        }
    }

    it("constructor", ()=> {
        var bob = new Employee("Bob", "bucho");
        assert.deepEqual(bob.getInfo(), { name: "Bob", position: "bucho"});
    });
});