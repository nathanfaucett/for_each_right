var isArrayLike = require("is_array_like"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    arrayForEachRight = require("array-for_each_right"),
    objectForEachRight = require("object-for_each_right");


module.exports = forEachRight;


function forEachRight(value, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 3);
    return isArrayLike(value) ?
        arrayForEachRight(value, callback) :
        objectForEachRight(value, callback);
}
