// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

function sortColors(nums: number[]): void {
    const countColors: number[] = [0, 0, 0];

    for (let i = 0; i < nums.length; i++) {
        countColors[nums[i]] += 1;
    }

    let index = 0;
    let colorIndex = 0;

    while (index < nums.length) {
        while (countColors[colorIndex] === 0) {
            colorIndex++;
        }
        nums[index] = colorIndex;
        countColors[colorIndex]--;
        index++;
    }

};