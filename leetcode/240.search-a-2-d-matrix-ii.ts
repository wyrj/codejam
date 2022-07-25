/*
 * @lc app=leetcode id=240 lang=typescript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row += 1;
    } else {
      col -= 1;
    }
  }
  return false;
};
// @lc code=end

