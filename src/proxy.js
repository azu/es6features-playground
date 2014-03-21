"use strict";
var assert = require("power-assert");
describe("Proxy", ()=> {
    it("proxying a normal object", ()=> {
        var target = {};
        var handler = {
            get: function (receiver, name) {
                return `Hello, ${name}!`;
            }
        };

        var p = new Proxy(target, handler);
        assert(p.world === 'Hello, world!');
    });
});