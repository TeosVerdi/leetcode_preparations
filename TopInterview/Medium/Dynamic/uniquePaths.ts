function uniquePaths(m: number, n: number): number {
    let ans = 1;

    let i = 1;
    let j = m + n - 2;
    while (i < Math.max(m,n)) {
        ans = (ans * j) / i
        i++;
        j--;
    }
    return ans;
};