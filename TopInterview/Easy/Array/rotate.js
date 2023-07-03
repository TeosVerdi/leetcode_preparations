/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let rotateSteps = k % nums.length;
    if (rotateSteps === 0) {
        return;
    }
    let rememberedInteger = nums[0];
    let j = 0;
    for (i = 0; i < nums.length; i++) {
        const newIndex = (j + rotateSteps) % nums.length;
        const tempInteger = nums[newIndex]
        nums[newIndex] = rememberedInteger;
        rememberedInteger = tempInteger
        j = newIndex;
    }
    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6], 3))