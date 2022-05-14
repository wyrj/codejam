/*
 * @lc app=leetcode id=309 lang=typescript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  const cache = <Array<number | undefined>>[];
  function r(start: number): number {
    if (start >= prices.length - 1) {
      return 0;
    }
    let v = cache[start];
    if (v !== undefined) {
      return v;
    }
    v = r(start + 1);
    const buyPrice = prices[start];
    for (let i = start + 1; i < prices.length; i++) {
      const price = prices[i];
      if (price < buyPrice) {
        break;
      }
      v = Math.max(v, price - buyPrice + r(i + 2));
    }
    cache[start] = v;
    return v;
  }
  return r(0);
};
// @lc code=end

