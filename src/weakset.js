"use strict";
var assert = require("power-assert");
describe("WeakSet", ()=> {
    it("is weakset", ()=> {
        var ws = new WeakSet();
        ws.add({ data: 42 });
        assert(ws.size === undefined);
    });
});
