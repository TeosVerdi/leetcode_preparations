function exist(board: string[][], word: string): boolean {
    const testWord = (i: number, j: number, index: number) => {
        if (index >= word.length) {
            return true;
        }
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || word[index] !== board[i][j]) {
            return false;
        }
        const rememberedChar = word[index];
        board[i][j] = "#";
        const result = testWord(i + 1, j, index + 1) || testWord(i, j + 1, index + 1) ||
            testWord(i, j - 1, index + 1) ||
            testWord(i - 1, j, index + 1)
        board[i][j] = rememberedChar;
        return result;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (testWord(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};