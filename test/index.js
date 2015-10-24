var tape = require("tape"),
    forEachRight = require("..");


tape("forEachRight(object, callback[, thisArg]) executes a provided function once per object element, starting from the right", function(assert) {
    var count;

    count = 0;
    forEachRight([0, 1, 2, 3, 4], function() {
        count += 1;
    });
    assert.equals(count, 5);

    count = 0;
    forEachRight([0, 1, 2, 3, 4], function() {
        count += 1;
    });
    assert.equals(count, 5);

    assert.end();
});
