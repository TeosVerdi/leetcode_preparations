function threeSum(nums: number[]): number[][] {
    const triplets: number[][] = [];

    for (let i = 0; i < nums.length - 1; i++) {
        const twoSum = twoSumOn(nums.slice(i+1), -1*nums[i])
        if (twoSum) {
            triplets.push([...twoSum, nums[i]])
        }
    }

    return triplets;
};

var twoSumOn = function (nums, target): number[] | null {
    const hashComp = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashComp.hasOwnProperty((target - nums[i]).toString())) {
            return [target - nums[i], nums[i]]
        } 
        hashComp[nums[i].toString()] = 1
    }
    return null;
};

