/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const hashMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!hashMap.hasOwnProperty(s[i])) {
            hashMap[s[i]] = 1
        } else {
            hashMap[s[i]] += 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!hashMap.hasOwnProperty(t[i]) || hashMap[t[i]] < 1) {
            return false;
        }

        hashMap[t[i]] -= 1;
    }

    return true;
};