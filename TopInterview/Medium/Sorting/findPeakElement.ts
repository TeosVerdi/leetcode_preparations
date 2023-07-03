function findPeakElement(nums: number[]): number {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        const mid1 = Math.floor((high + low) / 2);
        const mid2 = mid1 + 1;

        if (nums[mid1] < nums[mid2]) {
            low = mid2;
        } else {
            high = mid1;
        }
    }
    return low;
};