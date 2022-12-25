/*
 * @lc app=leetcode id=931 lang=typescript
 *
 * [931] Minimum Falling Path Sum
 */

// @lc code=start
function minFallingPathSum(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  let table = matrix[m - 1].slice();
  for (let r = m - 2; r >= 0; r--) {
    const next = new Array(n).fill(0);
    for(let c = 0; c < n; c++) {
      next[c] = Math.min(table[c - 1] ?? 1e4, table[c], table[c + 1] ?? 1e4) + matrix[r][c];
    }
    table = next;
  }
  return Math.min(...table);
};
// @lc code=end

