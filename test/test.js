var assert = require("assert"),
    forEachRight = require("../src/index");


describe("forEachRight", function() {
    it("should loop over array or object from the right", function() {
        var array = [0, 1, 2],
            object = {
                0: 0,
                1: 1,
                2: 2
            };

        forEachRight(array, function(value, index) {
            assert.equal(array[index], value);
        });

        forEachRight(object, function(value, key) {
            assert.equal(object[key], value);
        });
    });
});
