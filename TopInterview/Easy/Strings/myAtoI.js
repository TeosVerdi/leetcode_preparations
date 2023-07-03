/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const sFixed = s.trim().split('');
    let number = 0;
    const [INT_MAX, INT_MIN] = [Math.pow(2, 31) - 1, -Math.pow(2, 31)]
    let sign = 1;
    let index = 0;
    if (sFixed[0] === '-') {
        sign = -1;
        index++;
    } else if (
        sFixed[0] === '+'
    ) {
        sign = 1;
        index++;
    }

    while (index < sFixed.length) {
        if (/[0-9]+/.test(sFixed[index])) {
            const newNumber = Number(sFixed[index])
            if ((sign === 1 && (number > Math.floor(INT_MAX / 10) || (number === Math.floor(INT_MAX / 10) && INT_MAX % 10 < newNumber)))) {
                return INT_MAX;
            }

            if ((sign === -1 && (number * sign < Math.ceil(INT_MIN / 10) || (number * sign === Math.ceil(INT_MIN / 10) && Math.abs(INT_MIN % 10) < newNumber)))) {
                return INT_MIN;
            }
            number = number * 10 + newNumber;
            if (index === sFixed.length - 1) {
                return number * sign;
            }
        } else {
            return number * sign;
        }
        index++;
    }
    return 0;
};

myAtoi("-2147483649")