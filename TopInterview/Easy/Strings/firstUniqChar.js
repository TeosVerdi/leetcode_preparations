/**
 * @param {string} s
 * @return {number}
 */

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
var firstUniqChar = function (s) {
    const sArr = s.split('');
    const hashMap = {};
    for (i = 0; i < sArr.length; i++) {
        if (!hashMap.hasOwnProperty(sArr[i])) {
            hashMap[sArr[i]] = 1;
        } else {
            hashMap[sArr[i]] += 1;
        }
    }

    for (i = 0; i < sArr.length; i++) {
        if (hashMap[sArr[i]] === 1) {
            return i;
        }
    }

    return -1;
};