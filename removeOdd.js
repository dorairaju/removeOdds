var obj = {
    removeOddElements: function (arr, ival) {
        if (arr[ival] === undefined) {
            return arr;
        }
        if (arr[ival] % 2 !== 0) {
            arr.splice(ival, 1);
        } else {
            ival += 1;
        }
        obj.removeOddElements(arr, ival);
    }
};

module.exports = obj;
