"use strict";
var assert = require("power-assert");
module math from "./math";

describe("module", ()=> {
    it("use module", ()=> {
        assert(math.sum(math.pi, math.pi) === 6.283186);
    });
});
