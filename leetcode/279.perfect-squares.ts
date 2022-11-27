/*
 * @lc app=leetcode id=279 lang=typescript
 *
 * [279] Perfect Squares
 */

// @lc code=start
function numSquares(n: number): number {
  const table = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = i;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, table[i - j * j]);
    }
    table[i] = min + 1;
  }
  return table[n];
};
// @lc code=end

