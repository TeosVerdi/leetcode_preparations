// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
function numIslands(grid) {
    var count = 0;
    var destroy = function (m, n) {
        if (m < 0 || m >= grid.length || n < 0 || n >= grid[0].length || grid[m][n] !== '1') {
            return;
        }
        grid[m][n] = '0';
        destroy(m - 1, n);
        destroy(m + 1, n);
        destroy(m, n - 1);
        destroy(m, n + 1);
    };
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                destroy(i, j);
            }
        }
    }
    return count;
}