/*
 * @lc app=leetcode id=867 lang=typescript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
  return Array.from(matrix[0], (_, i) => {
    return Array.from(matrix, (_, j) => matrix[j][i]);
  });
};
// @lc code=end

