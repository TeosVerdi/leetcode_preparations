function lengthOfLongestSubstring(s: string): number {
    let answer = 0;
    let pointer1 = 0;
    let pointer2 = 0;
    const charSet = new Set();

    while (pointer2 < s.length) {
        if (charSet.has(s[pointer2])) {
            while (s[pointer1] !== s[pointer2]) {
                charSet.delete(s[pointer1]);
                pointer1++;
            }
            pointer1++;
        } else {
            charSet.add(s[pointer2]);
            if ((pointer2 - pointer1 + 1) > answer) {
                answer = pointer2 - pointer1 + 1;
            }
        }
        pointer2++;
    }
    return answer;
};