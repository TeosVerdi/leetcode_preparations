// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const length = matrix.length;
    for (i = 0; i < Math.ceil(length / 2); i++) {
        for (j = 0; j < Math.floor(length / 2); j++) {
            // DOESNT WORK WHY
            // [matrix[i][j], matrix[i][length - j - 1], matrix[length - i - 1][length - j - 1], matrix[length - i - 1][j]] = [matrix[length - i - 1][j], matrix[i][j], matrix[i][length - j - 1], matrix[length - i - 1][length - j - 1]]
            let temp = matrix[length - 1 - j][i];
            matrix[length - 1 - j][i] = matrix[length - 1 - i][length - j - 1];
            matrix[length - 1 - i][length - j - 1] = matrix[j][length - 1 - i];
            matrix[j][length - 1 - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))