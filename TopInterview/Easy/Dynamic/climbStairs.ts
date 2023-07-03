function climbStairs(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let ans = [1, 2];
    for (let i: number = 3; i <= n; i++) {
        ans = [ans[1], ans[0] + ans[1]];
    }
    return ans[1];
};