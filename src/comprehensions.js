"use strict";
// traceur 0.0.30 doesn't support
describe("Comprehensions", ()=> {
    it("Array comprehensions", ()=> {
        var results = [
        for(c of customers)
            if (c.city == "Seattle")
            { name: c.name, age: c.age }
        ]
    });
    it("Generator comprehensions", ()=> {
        var results = (
        for(c of customers)
            if (c.city == "Seattle")
            { name: c.name, age: c.age }
        )
    });
});