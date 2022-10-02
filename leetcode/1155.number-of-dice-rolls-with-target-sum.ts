/*
 * @lc app=leetcode id=1155 lang=typescript
 *
 * [1155] Number of Dice Rolls With Target Sum
 */

// @lc code=start
function numRollsToTarget(n: number, k: number, target: number): number {
  const mod = 1e9 + 7;
  const table: number[][] = [];
  table.push(new Array(target + 1).fill(0));
  table[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    const row = [0];
    for (let t = 1; t <= target; t++) {
      let val = 0;
      const limit = Math.min(k, t);
      for (let ki = 1; ki <= limit; ki++) {
        val = (val + table[i - 1][t - ki]) % mod;
      }
      row.push(val);
    }
    table.push(row);
  }
  return table[n][target];
};
// @lc code=end

