/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    let queue = [beginWord];
    let steps = 1;

    while (queue.length) {
        let next = [];
        for (let testWord of queue) {
            if (testWord === endWord) {
                return steps;
            }
            for (let i = 0; i < testWord.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const newWord = testWord.slice(0, i) + String.fromCharCode(97 + j) + testWord.slice(i + 1);
                    if (wordSet.has(newWord)) {
                        next.push(newWord);
                        wordSet.delete(newWord);
                    }
                }
            }
        }

        steps++;
        queue = next;
    }

    return 0;
};

ladderLength("red", "tax", ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"])