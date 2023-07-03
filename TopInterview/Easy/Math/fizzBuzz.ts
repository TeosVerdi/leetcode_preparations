function fizzBuzz(n: number): string[] {
    let answer: string[] = [];
    for (let i = 1; i <= n; i++) {
        let newString = "";
        if (i % 3 === 0) {
            newString += "Fizz"
        }
        if (i % 5 === 0) {
            newString += "Buzz"
        }

        answer.push(newString || i.toString());
    }
    return answer;
};