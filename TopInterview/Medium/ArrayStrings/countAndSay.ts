function countAndSay(n: number): string {
    let tempArray: number[][] = [];
    if (n === 1) return "1";
    const oldCount = countAndSay(n - 1);
    let char = oldCount[0];
    let newPush = [1, Number(char)]
    for (let i = 1; i < oldCount.length; i++) {
        if (oldCount[i] !== char) {
            tempArray.push(newPush);
            char = oldCount[i];
            newPush = [1, Number(char)]
        } else {
            newPush[0] += 1;
        }
    }
    tempArray.push(newPush);
    return tempArray.flat().join("");
};