class Solution {
    nums: number[];
    origin: number[];
    constructor(nums: number[]) {
        this.nums = nums;
        this.origin = [...nums];
    }

    reset(): number[] {
        this.nums = [...this.origin];
        return this.nums;
    }

    shuffle(): number[] {
        let randomIndex: number;
        for (let i = this.nums.length; i > 0; i--) {
            randomIndex = Math.floor(Math.random() * i);
            [this.nums[i - 1], this.nums[randomIndex]] = [this.nums[randomIndex], this.nums[i - 1]];
        }
        return this.nums;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */