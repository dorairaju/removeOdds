var chai = require('chai');
var assert = chai.assert;
var removeOddModule = require('../removeOdd.js')

describe('RemovingOddElementsFromArray', function () {

    it('Arrays with elements form 1 to 10', function () {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        removeOddModule.removeOddElements(arr, 0);
        assert.equal(arr.length, 5);
    });

    it('All odd', function () {
        var arr = [3, 5, 7, 9];
        removeOddModule.removeOddElements(arr, 0);
        assert.equal(arr.length, 0);
    });

    it('All even', function () {
        var arr = [2, 4, 6, 8, 10];
        removeOddModule.removeOddElements(arr, 0);
        assert.equal(arr.length, 5);
    });

    it('Empty Array', function () {
        var arr = [];
        removeOddModule.removeOddElements(arr, 0);
        assert.equal(arr.length, 0);
    });

    it('Arrays with mix of odd and even comparing contents', function () {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var expectedArray = [2, 4, 6, 8, 10];
        removeOddModule.removeOddElements(arr, 0);

        assert.equal(arr.join(), expectedArray.join());
    });

});
