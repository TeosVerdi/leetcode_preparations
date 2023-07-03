// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

function topKFrequent(nums: number[], k: number): number[] {
    const numHash: { [key: string]: number } = {};
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const key = nums[i].toString();
        if (!numHash.hasOwnProperty(key)) {
            numHash[key] = 0;
        }
        numHash[key]++;
    }

    const mostValueArray = Object.values(numHash).sort((a, b) => a - b).reverse().slice(0, k);

    for (let num of Object.keys(numHash)) {
        if (mostValueArray.includes(numHash[num])) {
            result.push(Number(num));
        }
    }
    return result;
};