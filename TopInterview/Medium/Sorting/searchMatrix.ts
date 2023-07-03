function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix[0][0] === target) return true;

    let row = 0;
    let col = matrix[0].length - 1;

    while (row <= matrix.length - 1 && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        }
        if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
     }

     return false;
};