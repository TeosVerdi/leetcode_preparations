function increasingTriplet(nums: number[]): boolean {
    let [i, k] = getBumps(nums, 0, nums.length - 1);

    if (k - i < 2) {
        return false;
    } 

    for (let j = i + 1; j < k; j++) {
        if (nums[j] > nums[i] && nums[j] < nums[k]) { 
            return true;
        }
    }
    return false;
};


const getBumps = (nums: number[], left: number, right: number): [number, number] => {
    let i = left;

    while (i < nums.length) {
        if (nums[i] > nums[i + 1]) {
            i++;
        }
        else {
            break;
        }
    }

    let k = right;
   
    while (k > i + 1) {
        if (nums[k] < nums[k - 1]) {
            k--;
        }
        else {
            break;
        }
    }

    return [i, k];
}