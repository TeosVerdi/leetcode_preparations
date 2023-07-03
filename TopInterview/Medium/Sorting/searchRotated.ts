function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    while (high > low) {
        var mid = Math.floor((high + low) / 2);
        if (nums[mid] < nums[0]) {
            high = mid - 1;
        }
        else {
            low = mid;
        }
    }

    const peak = low;
    if (target === nums[peak]) {
        return peak;
    }
    if (target > nums[peak] || target < nums[peak + 1]) {
        return -1;
    }
    low = 0;
    high = nums.length - 1;
    if (target >= nums[0]) {
        high = peak;
    }
    else {
        low = peak + 1;
    }
    if (high === low && nums[high] === target) {
        return high;
    }

    while (high > low) {
        const mid = Math.floor((high + low) / 2);
        if (target > nums[mid]) {
            low = mid + 1;
        } else if (target < nums[mid]) {
            high = mid;
        } else {
            return mid;
        }
    }

    return -1;
};