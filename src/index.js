var keys = require("keys"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    isArrayLike = require("is_array_like");


function forEachRightArray(array, callback) {
    var i = array.length;

    while (i--) {
        if (callback(array[i], i) === false) {
            return false;
        }
    }

    return array;
}

function forEachRightObject(object, callback) {
    var objectKeys = keys(object),
        i = objectKeys.length,
        key;

    while (i--) {
        key = objectKeys[i];

        if (callback(object[key], key) === false) {
            return false;
        }
    }

    return object;
}

module.exports = function forEachRight(object, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 2);
    return isArrayLike(object) ? forEachRightArray(object, callback) : forEachRightObject(object, callback);
};
