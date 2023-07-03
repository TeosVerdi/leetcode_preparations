function maxSubArray(nums: number[]): number {
    let [sum, max] = [0, -Infinity]

    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(sum, max);
    }

    return max;
};