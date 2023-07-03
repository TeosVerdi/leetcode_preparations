
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2)
var twoSum = function (nums, target) {
    for (let pointer1 = 0; pointer1 < nums.length; pointer1++) {
        for (let pointer2 = pointer1; pointer2 < nums.length; pointer2++) {
            if (nums[pointer1] + nums[pointer2] === target) {
                return [pointer1, pointer2]
            }
        }
    }
};

var twoSumOn = function (nums, target) {
    const hashComp = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashComp.hasOwnProperty((target - nums[i]).toString())) {
            return [hashComp[target - nums[i]], i];
        }
        hashComp[nums[i]] = i;
    }
    return null;
};

console.log(twoSumOn([2, 7, 11, 15], 9))