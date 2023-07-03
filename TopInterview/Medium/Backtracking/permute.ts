// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

function permute(nums: number[]): number[][] {
    let result: number[][] = [];

    const generateArray = (generatingArray: number[]) => {
        if (generatingArray.length >= nums.length) {
            result.push(generatingArray);
        }
        for (let i of nums) {
            if (!generatingArray.includes(i)) {
                generateArray([...generatingArray, i])
            }
        }
    }

    for (let i of nums) {
        generateArray([i]);
    }

    return result;
};