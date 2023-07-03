function coinChange(coins: number[], amount: number): number {
    const dp: number[] = [0];

    for (let i = 1; i <= amount; i++) {
        dp.push(Infinity);
    }

    for (let i = 1; i <= amount; i++) {
        for (let j of coins) {
            if (i < j) {
                continue;
            }
            if (dp[i - j] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - j] + 1);
            }
        }
    }
    if (dp[amount] === Infinity) {
        return -1;
    }
    return dp[amount];
};