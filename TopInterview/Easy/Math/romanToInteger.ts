function romanToInt(s: string): number {
    let romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let answer = 0;
    for (let i = 0; i <= s.length - 2; i++) {
        if (romanMap[s[i]] < romanMap[s[i+1]]) {
            answer -= romanMap[s[i]]
        } else {
            answer += romanMap[s[i]]
        }
    }
    answer += romanMap[s[s.length - 1]]
    return answer;
};
