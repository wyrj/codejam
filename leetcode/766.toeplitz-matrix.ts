/*
 * @lc app=leetcode id=766 lang=typescript
 *
 * [766] Toeplitz Matrix
 */

// @lc code=start
function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let d = -(m - 1); d < n; d++) {
    let row = Math.max(0, -d);
    const number = matrix[row][row + d];
    row += 1;
    for (; row < m && row + d < n; row++) {
      if (matrix[row][row + d] !== number) {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

