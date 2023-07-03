function letterCombinations(digits: string): string[] {
    let letters: string[] = [];
    let digitLetters: { [key: string]: string } = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    for (let digit of digits) {
        if (letters.length === 0) {
            for (let letter of digitLetters[digit]) {
                letters.push(letter);
            }
        } else {
            let newLetters: string[] = [];
            for (let letter of letters) {
                for (let newLetter of digitLetters[digit]) {
                    newLetters.push(letter + newLetter);
                }
            }
            letters = newLetters;
        }
    }
    return letters;
};