/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  const table = new Array(amount + 1).fill(0);
  for (let i = 1; i <= amount; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (const n of coins) {
      if (i - n >= 0) {
        min = Math.min(min, table[i - n] + 1);
      }
    }
    table[i] = min;
  }
  const result = table[amount];
  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};
// @lc code=end

