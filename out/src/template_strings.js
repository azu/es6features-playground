"use strict";
var assert = require("power-assert");
describe("Template Strings", (function() {
  it("Basic literal string creation", (function() {
    var expected = "In JavaScript '\n' is a line-feed.";
    assert.equal("In JavaScript '\n' is a line-feed.", expected);
  }));
  it("Multiline strings", (function() {
    var expected = "In JavaScript this is\n not legal.";
    assert.equal("In JavaScript this is\n not legal.", expected);
  }));
  it("Construct a DOM query", (function() {
    var name = "Bob",
        time = "today";
    assert.equal(("Hello " + name + ", how are you " + time + "?"), "Hello " + name + ", how are you " + time + "?");
  }));
}));

//# sourceMappingURL=template_strings.map
