/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let cut = 0;
    let good = true;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (!strs[j][i] || strs[j][i] !== strs[0][i]) {
                cut = i;
                good = false;
                break;
            }
        }
        if (!good) {
            return strs[0].slice(0, cut);
        }
    }
    if (good) {
        return strs[0];
    }
    return "";
};

console.log(longestCommonPrefix(["flight"]))