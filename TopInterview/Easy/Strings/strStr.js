/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] === needle[0]) {
            let isGood = true;
            for (let j = i + 1; j < i + needle.length; j++) {
                if (haystack[j] !== needle[j - i]) {
                    isGood = false;
                }
            }
            if (isGood) {
                return i;
            }
        }
    }
    return -1;
};

console.log(strStr("leetcode", "leeto"))