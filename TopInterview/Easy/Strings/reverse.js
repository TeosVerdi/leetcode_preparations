/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const size = s.length;
    for (i = 0; i < Math.floor(size / 2); i++) {
        [s[i], s[size - 1 - i]] = [s[size - 1 - i], s[i]];
    }
};