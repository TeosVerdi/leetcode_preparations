/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let profit = 0;
//     let pointer1 = 0;
//     let pointer2 = 1;
//     while (pointer2 < prices.length) {
//         if (prices[pointer1] >= prices[pointer2]) {
//             pointer1 = pointer2;
//         }
//         if (prices[pointer1] < prices[pointer2] && (pointer2 + 1 > prices.length - 1 || prices[pointer2] > prices[pointer2 + 1])) {
//             profit += prices[pointer2] - prices[pointer1]
//             pointer1 = pointer2
//         }
//         pointer2++;
//     }
//     return profit;
// };

var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))