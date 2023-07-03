// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

//     A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//     Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        if (!testArray(board[i]) || !testArray(board.map((element) => element[i]))) {
            return false
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const testingArray = [...board[i * 3].filter((val, index) => index >= j * 3 && index < (j + 1) * 3), ...board[i * 3 + 1].filter((val, index) => index >= j * 3 && index < (j + 1) * 3), ...board[i * 3 + 2].filter((val, index) => index >= j * 3 && index < (j + 1) * 3)]
            if (!testArray(testingArray)) {
                return false;
            }
        }
    }
    return true;
};

var testArray = (arr) => {
    const arrSet = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '.') {
            if (arrSet.has(arr[i])) {
                return false;
            }
            arrSet.add(arr[i])
        }
    }
    return true;
}

console.log(isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", ".", ".", ".", ".", ".", "6", "."]
    , [".", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))