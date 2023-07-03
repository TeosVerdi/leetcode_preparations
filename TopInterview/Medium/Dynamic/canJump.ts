function canJump(nums: number[]): boolean {
    let last_index = nums.length - 1;

    for (let i = last_index - 1; i >= 0; i--) {
        if (i + nums[i] >= last_index) {
            last_index = i;
        }
    }
    if (last_index !== 0) {
        return false;
    }
    return true;
};