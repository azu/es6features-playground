"use strict";
var assert = require("power-assert");
describe("Default", ()=> {
    it("default parameter value", ()=> {
        function f(x, y=12) {
            return x + y;
        }
        assert(f(3) == 15);
    });
});
describe("Rest", ()=> {
    it("...parameter", ()=> {
        function f(x, ...y) {
            return x * y.length;
        }
        assert(f(3, "hello", true) === 6);
    });
});
describe("Spread", ()=> {
    it("pass each elem of array as argument", ()=> {
        function f(x, y, z) {
            return x + y + z;
        }
        assert(f(...[1,2,3]) === 6);
    });
});