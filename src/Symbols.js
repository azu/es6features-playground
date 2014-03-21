"use strict";
var assert = require("power-assert");
var MyClass = (function () {

    // module scoped symbol
    var key = Symbol("key");

    function MyClass(privateData) {
        this[key] = "this is private";
    }

    MyClass.prototype = {
        doStuff: function () {
            return this[key];
        }
    };
    return MyClass;
})();
describe("Symbols", ()=> {
    it("use symbols as private key", ()=> {
        var c = new MyClass("hello")
        assert(c["key"] === undefined);
    });
});
