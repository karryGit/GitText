var array = [10, 20, 30, 40, 50, 60, 70, 80];
// delete array[1];
//原型本身的
array.forEach(function (value, index, arr) {
    // console.log(value, index, arr, arguments[1])
}, 10);
//实现
//添加原型
Array.prototype.myForEach = function (callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    var thisAry;
    for (var i = 0; i < this.length; i++) {
        if (Object.prototype.hasOwnProperty.call(this, i)) {
            callback(this[i], i, this);
            thisAry = arguments[i];
        }
    }
};
// array.myForEach();
array.myForEach(function (value, index, arr) {
    console.log(value, index, arr, arguments[0]);
});
