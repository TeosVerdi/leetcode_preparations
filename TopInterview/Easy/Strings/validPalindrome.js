/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const sFixed = s.toLowerCase().replace(/[^a-z0-9]+/g, '');
    console.log(sFixed);
    for (i = 0; i < Math.floor(sFixed.length / 2); i++) {
        if (sFixed[i] !== sFixed[sFixed.length - 1 - i]) {
            return false
        }
    }

    return true;
};