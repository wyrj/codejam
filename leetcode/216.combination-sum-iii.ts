/*
 * @lc app=leetcode id=216 lang=typescript
 *
 * [216] Combination Sum III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  const table: number[][][][] = [];
  function foo(k: number, n: number): number[][] {
    if (k === 1) {
      return (n <= 9) ? [[n]] : [];
    }
    if (!table[k]) {
      table[k] = [];
    }
    if (table[k][n]) {
      return table[k][n];
    }
    table[k][n] = [];
    for (let i = 1; i <= 9; i++) {
      for (const can of foo(k - 1, n - i)) {
        if (can[0] > i) {
          table[k][n].push([i, ...can]);
        }
      }
    }
    return table[k][n];
  }
  return foo(k, n);
};
// @lc code=end

