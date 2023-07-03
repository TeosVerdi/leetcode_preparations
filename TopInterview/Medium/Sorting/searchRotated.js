function search(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while (high > low) {
        var mid = Math.floor((high + low) / 2);
        if (nums[mid] < nums[0]) {
            high = mid - 1;
        }
        else {
            low = mid;
        }
    }
    var peak = low;
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
        var mid = Math.floor((high + low) / 2);
        console.log(low, high, mid);

        if (target > nums[mid]) {
            low = mid + 1;
        }
        else if (target < nums[mid]) {
            high = mid;
        }
        else {
            return mid;
        }
    }
    return -1;
}
;

console.log(search([5, 1, 3], 1))