// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

function generateParenthesis(n: number): string[] {
    if (n === 0) return [];
    const result: string[] = [];
    const combinations = (generatedString: string, openCount: number, newCountLeft: number) => {
        if (newCountLeft > 0) {
            combinations(generatedString + "(", openCount + 1, newCountLeft - 1);
        }
        if (openCount > 0) {
            combinations(generatedString + ")", openCount - 1, newCountLeft);
        }
        if (newCountLeft === 0 && openCount === 0) {
            result.push(generatedString);
        }
    }
    combinations("", 0, n);
    return result;
};