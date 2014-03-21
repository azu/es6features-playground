"use strict";
var assert = require("power-assert");
describe("Destructuring", ()=> {
    function getASTNode() {
        return {
            op: "1st operation",
            "lhs": {
                op: "lhs operation"
            },
            "rhs": {
                op: "rhs operation"
            }
        };
    }

    it("list matching", ()=> {
        var [a, , b] = [1, 2, 3];
        assert(a === 1);
        assert(b === 3);
    });
    it("object matching", ()=> {
        var { op: a, lhs: { op: b }, rhs: c }
            = getASTNode();
        var ast = getASTNode();
        assert.deepEqual(a, ast.op);
        assert.deepEqual(b, ast.lhs.op);
        assert.deepEqual(c, ast.rhs);
    });
    it("object matching shorthand", ()=> {
        var {op, lhs, rhs} = getASTNode();
        var ast = getASTNode();
        assert.deepEqual(op, ast.op);
        assert.deepEqual(lhs, ast.lhs);
        assert.deepEqual(rhs, ast.rhs);
    });
    it(" Can be used in parameter position", ()=> {
        function g({name: x}) {
            assert(x === 5);
        }
        g({name: 5})
    });
    it("Fail-soft destructuring", ()=> {
        var [a] = [];
        assert(a === undefined);
    });
});