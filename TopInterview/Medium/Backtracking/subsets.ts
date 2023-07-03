// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

function subsets(nums: number[]): number[][] {
    let result: number[][] = [[]];

    const generateSubset = (createdSubset: number[], index: number) => {
        result.push(createdSubset);
        if (createdSubset.length < nums.length) {
            for (let index2 = index + 1; index2 < nums.length; index2++) {
                generateSubset([...createdSubset, nums[index2]], index2);
            }
        }
    }

    for (let index = 0; index < nums.length; index++) {
        generateSubset([nums[index]], index);
    }

    return result
};