/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let pointer1 = 0;
    for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
        if (nums[pointer2] !== 0) {
            nums[pointer1] = nums[pointer2];
            pointer1++
        }
    }

    let count = nums.length - pointer1;
    while (count > 0) {
        nums[nums.length - count] = 0;
        count--;
    }
};
