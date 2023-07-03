function longestPalindrome(s: string): string {
    let answer = s[0];
    for (let p1 = 0; p1 < s.length; p1++) {
        for (let p2 = p1+1; p2 < s.length; p2++) {
        if (s[p1] === s[p2]) {
            const checkString = s.slice(p1, p2+1);
            if (checkPalindrome(checkString) && checkString.length > answer.length) {
                answer = checkString;
            }
        }
    }
    }
    return answer;
};

const checkPalindrome = (s: string) => {
    let [p1, p2] = [0, s.length - 1]
    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    return true;
}

// class Solution:
//     def longestPalindrome(self, s: str) -> str:
//         n = len(s)
//         longest_palindrome_start, longest_palindrome_len = 0, 1

//         for i in range(0, n):
//             right = i
//             while right < n and s[i] == s[right]:
//                 right += 1
//             # s[i, right - 1] inclusive are equal characters e.g. "aaa"
            
//             # while s[left] == s[right], s[left, right] inclusive is palindrome e.g. "baaab"
//             left = i - 1
//             while left >= 0 and right < n and s[left] == s[right]:
//                 left -= 1
//                 right += 1
            
//             # s[left + 1, right - 1] inclusive is palindromic
//             palindrome_len = right - left - 1
//             if palindrome_len > longest_palindrome_len:
//                 longest_palindrome_len = palindrome_len
//                 longest_palindrome_start = left + 1
            
//         return s[longest_palindrome_start: longest_palindrome_start + longest_palindrome_len]
         