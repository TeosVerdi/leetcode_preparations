function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) return [-1, -1];
    const result = [-1, -1];
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        const mid = Math.floor((high + low) / 2);
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    if (nums[low] !== target) return result;

    result[0] = low;

    high = nums.length - 1;

    while (low < high) {
        const mid = Math.floor((high + low) / 2) + 1;
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid;
        }
    }

    result[1] = high;


    return result;
};