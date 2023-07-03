// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

function numIslands(grid: string[][]): number {
    let count = 0;

    const destroy = (m: number, n: number) => {
        grid[m][n] = '0';
        if (m < grid.length - 1 && grid[m + 1][n] === '1') {
            destroy(m + 1, n);
        }
        if (n < grid[0].length - 1 && grid[m][n + 1] === '1') {
            destroy(m, n + 1);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                destroy(i, j);
                console.log(grid);
            }
        }
    }
    return count;
};

numIslands([["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]])