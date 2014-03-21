"use strict";
var sinon = require("sinon");
var assert = require("power-assert");
it("Enhanced Object Literals", ()=> {
    var handler = sinon.spy();
    var obj = {
        // Shorthand for ‘handler: handler’
        handler
        /* traceur 0.0.30 doesn't support
            // Methods
            toString() {
             // Super calls
             return "d " + super.toString();
            },
            // Computed (dynamic) property names
            [ 'prop_' + (() => 42)() ]: 42
         */
    };
    obj.handler();
    assert(handler.called);
});