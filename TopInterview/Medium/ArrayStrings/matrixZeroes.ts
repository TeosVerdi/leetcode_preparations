// Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.

/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
    let col0 = false;
    let row0 = false;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            col0 = true;
            break;
        }
    }
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            row0 = true;
            break;
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 0; j < matrix[0].length; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][j] = 0;
            }
        }
    } 

    if (row0) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }

    if (col0) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
};