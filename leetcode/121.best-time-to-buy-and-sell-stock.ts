/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    if (prices.length <= 1) {
        return 0;
    }
    let profit = 0;
    let buy = prices[0];
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - buy);
        buy = Math.min(buy, prices[i]);
    }
    return profit;
};
// @lc code=end

