// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

function groupAnagrams(strs: string[]): string[][] {
    let answer: string[][] = [];
    let parsedIndexes: Set<number> = new Set();
    for (let i = 0; i < strs.length; i++) {
        if (!parsedIndexes.has(i)) {
            const anagrams = [strs[i]]
            const charMesh = {}
            parsedIndexes.add(i);
            for (let j = 0; j < strs[i].length; j++) {
                if (!charMesh.hasOwnProperty(strs[i][j])) {
                    charMesh[strs[i][j]] = 0;
                } 
                charMesh[strs[i][j]] += 1
            }
            for (let j = i+1; j<strs.length; j++) {
                if (strs[j].length !== strs[i].length) {
                    continue;
                }
                if (checkAgainstMesh(strs[j], charMesh)) {
                    anagrams.push(strs[j]);
                    parsedIndexes.add(j);
                }
            }
            answer.push(anagrams);
        }
    }
    return answer;
};

const checkAgainstMesh = (word: string, hash: {[key: string]: number}) => {
    const hashCopy = {...hash};
    for (let i = 0; i < word.length; i++) {
        if (!hashCopy.hasOwnProperty(word[i]) || hashCopy[word[i]] < 1) {
            return false;
        }
        hashCopy[word[i]] -= 1;
    }
    return true;
}

// A much easier way 

function groupAnagramsFast(strs: string[]): string[][] {
    const anagrams: {[key: string]: string[]} = {};
    for (let word of strs) {
        const sorted = word.split('').sort().join('');
        if (!anagrams.hasOwnProperty(sorted)) {
            anagrams[sorted] = []
        }
        anagrams[sorted].push(word);
    }
    return [...Object.values(anagrams)]
}