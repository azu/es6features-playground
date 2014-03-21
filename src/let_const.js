"use strict";
var assert = require("power-assert");
// traceur 0.0.30 doesn't support
describe("let const", ()=> {
    {
        let x;
        {
            // okay, block scoped name
            const x = "sneaky";
            // error, const
            x = "assiged error";
        }
        // error, already declared in block
        let x = "inner";
    }
});