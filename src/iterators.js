"use strict";
var assert = require("power-assert");
var sinon = require("sinon");
describe("Iterator", ()=> {
    var stub;
    beforeEach(()=> {
        stub = sinon.stub(console, "log");
    });
    afterEach(()=> {
        stub.restore();
    });
    it("should iterate", ()=> {
        var fibonacci = {
        };
        fibonacci[Symbol.iterator] = function () {
            let pre = 0, cur = 1;
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return { done: false, value: cur }
                }
            }
        };

        for (var n of fibonacci) {
            // truncate the sequence at 1000
            if (n > 1000) {
                break;
            }
            console.log(n);
        }
        assert(stub.called);
    });
});
