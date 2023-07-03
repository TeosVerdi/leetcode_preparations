/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let charSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (charSet.has(nums[i])) {
            return true;
        }
        charSet.add(nums[i]);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 4]))