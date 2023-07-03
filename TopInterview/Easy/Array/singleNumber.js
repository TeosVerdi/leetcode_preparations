/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let count = 0;
    const numSet = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            count -= nums[i]
        } else {
            count += nums[i];
            numSet.add(nums[i])
        }
    }
    return count;
};

// We can use XOR instead

var singleNumberXOR = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        count ^= nums[i];
    }
    return count;
};
