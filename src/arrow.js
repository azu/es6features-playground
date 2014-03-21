"use strict";
var assert = require("power-assert");
var sinon = require("sinon");
describe("ArrowFunction", ()=> {
    describe("Expression bodies", ()=> {
        var evens = [2, 4, 6];
        it("evens + 1", ()=> {
            var odds = evens.map(v => v + 1);
            assert.deepEqual(odds, [3, 5, 7]);
        });
        it("evens + index", ()=> {
            var nums = evens.map((v, i) => v + i);
            assert.deepEqual(nums, [2, 4 + 1, 6 + 2]);
        });
    });
    describe("Statement bodies", ()=> {
        var nums = [1, 5, 8, 10, 12, 15];
        it("nums push", ()=> {
            var fives = [];
            nums.forEach(v => {
                if (v % 5 === 0) {
                    fives.push(v);
                }
            });
            assert.deepEqual(fives, [5, 10, 15]);
        });
    });
    describe("Lexical this", ()=> {
        var stub;
        beforeEach(()=> {
            stub = sinon.spy(console, "log");
        });
        afterEach(()=> {
            stub.restore();
        });
        it("has lexical this", ()=> {
            var bob = {
                _name: "Bob",
                _friends: ["Jorge", "Smith"],
                printFriends() {
                    this._friends.forEach(f =>
                        console.log(this._name + " knows " + f));
                }
            };
            bob.printFriends();

            sinon.assert.calledTwice(stub);
            assert(/Bob/.test(stub.getCall(1).args[0]));
        });
    });
});
