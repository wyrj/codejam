/*
 * @lc app=leetcode id=329 lang=typescript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
function longestIncreasingPath(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const table: number[][] = Array.from(matrix, () => new Array(n).fill(0));
  function recursive(row: number, col: number): number {
    if (table[row][col] > 0) {
      return table[row][col];
    }
    let max = 1;
    for (const [rowDelta, colDelta] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const r = row + rowDelta;
      const c = col + colDelta;
      if (0 <= r && r < m && 0 <= c && c < n && matrix[row][col] < matrix[r][c]) {
        max = Math.max(max, recursive(r, c) + 1);
      }
    }
    return table[row][col] = max;
  }
  let max = 1;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      max = Math.max(max, recursive(r, c));
    }
  }
  return max;
};
// @lc code=end

longestIncreasingPath([[2, 1]]);