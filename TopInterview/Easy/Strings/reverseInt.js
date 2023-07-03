/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    if (absReversed > 2 ** 31) return 0;
    return absReversed * Math.sign(x);
};

// A better solution 
var reverse = function (x) {

    let res = 0;
    let MAX = 2 ** 31 - 1, MIN = -(2 ** 31);
    let xcopy = x;

    while (xcopy) {
        let pop = xcopy % 10;

        if (res > getFloor(MAX) || (res === getFloor(MAX) && pop > MAX % 10)) return 0;
        if (res < getFloor(MIN) || (res === getFloor(MIN) && pop < MIN % 10)) return 0;

        res = res * 10 + pop;
        xcopy = getFloor(xcopy)
    }
    return res;
};

function getFloor(x) {
    return Math.sign(x) * Math.floor(Math.abs(x / 10));
}

reverse(-123450)