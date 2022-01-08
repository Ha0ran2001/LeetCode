function maxProfit(prices: number[]): number {
    let cost: number = Infinity, profit: number = 0;
    for (let price of prices) {
        cost = Math.min(cost, price)
        profit = Math.max(profit, price - cost);
    }
    return profit;
};
