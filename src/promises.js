"use strict";
var assert = require("power-assert");
describe("promises", ()=> {
    it("is promise", ()=> {
        function promisefy(value = 0) {
            return Promise.resolve(value);
        }

        return promisefy(1000).then((value) => {
            assert(value === 1000);
        });
    });
});