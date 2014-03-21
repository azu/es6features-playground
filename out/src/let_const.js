"use strict";
var assert = require("power-assert");
describe("let const", (function() {
  {
    try {
      throw undefined;
    } catch (x) {
      ;
      {
        try {
          throw undefined;
        } catch (x) {
          x = "sneaky";
          x = "assiged error";
        }
      }
      x = "inner";
    }
  }
}));

//# sourceMappingURL=let_const.map
