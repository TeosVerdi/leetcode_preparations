// Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has

function hammingWeight(n: number): number {
    let x = n;
    let answer = 0;
    while (x !== 0) {
        answer += x % 2;
        x >>= 1;
    }
    return answer;
};