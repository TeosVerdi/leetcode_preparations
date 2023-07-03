function generate(numRows: number): number[][] {
    const answer: number[][] = [[1]];
    for (let i = 2; i <= numRows; i++) {
        const newPush: number[] = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i+1) {
                newPush.push(1);
            } else {
                newPush.push(answer[i-1][j-1] + answer[i-1][j])
            }
        }
        answer.push(newPush);
    }
    return answer;
};

