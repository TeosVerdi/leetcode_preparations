function isPowerOfThree(n: number): boolean {
    if (n <= 0) {
        return false;
    }

    // We should get biggest 3^x which is less than MAX_INT
    // x === 19

    return 3**19 % n === 0
};