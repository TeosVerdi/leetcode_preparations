function countPrimes(n: number): number {
    let A: boolean[] = [];
    for (let i = 2; i < n; i++) {
        A.push(true);
    }
    
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (A[i-2] === true) {
            let j = i**2;
            while (j-2 < A.length) {
                A[j-2] = false;
                j+=i;
            }
        }
    }
    return A.reduce((acc, cur) => acc + +cur ,0)
};