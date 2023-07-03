function rob(nums: number[]): number {
    if (nums.length === 1) {return nums[0]}
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    let dp = [nums[0], nums[1], Math.max(nums[1], nums[0] + nums[2])];
    let i = 3;
    while (i < nums.length) {
        dp.push(Math.max(dp[i - 1], dp[i - 2] + nums[i], dp[i-3] + nums[i]))
        i++;
    }
    return dp[nums.length - 1]
};