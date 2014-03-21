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
    it("Proxying a function object", ()=> {
        var target = function () { return 'I am the target'; };
        var handler = {
            apply: function (receiver, ...args) {
                return 'I am the proxy';
            }
        };
        var p = new Proxy(target, handler);
        assert(p() === 'I am the proxy');
    });
});