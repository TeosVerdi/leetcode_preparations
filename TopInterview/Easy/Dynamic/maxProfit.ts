// Brute force

function maxProfit(prices: number[]): number {
    const profits: number[] = [0];

    for (let i: number = 1; i<prices.length; i++) {
        profits.push(prices[i] - prices[0]);
    }

    let pointer = 1;
    while (pointer < prices.length) {
        for (let i = pointer + 1; i < prices.length; i++) {
            if (profits[i] < prices[i] - prices[pointer]) {
                profits[i] = prices[i] - prices[pointer];
            }
        }
    }

    let maxProfitTemp = 0;

    for (let i = 0; i < profits.length; i++) {
        if (maxProfitTemp < profits[i]) {
            maxProfitTemp = profits[i]
        }
    }
    return maxProfitTemp;
};

// One-piss

function maxProfitOneP(prices: number[]): number {

    let [min, maxProfit] = [Infinity, 0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
    }

    return maxProfit;
}