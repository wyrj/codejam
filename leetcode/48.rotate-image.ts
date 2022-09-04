/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  function swap(lhs: { r: number, c: number }, rhs: { r: number, c: number }): void {
    const temp = matrix[rhs.r][rhs.c];
    matrix[rhs.r][rhs.c] = matrix[lhs.r][lhs.c];
    matrix[lhs.r][lhs.c] = temp;
  }
  const row = Math.floor(matrix.length / 2);
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      swap({ r, c }, { r: matrix.length - r - 1, c });
    }
  }
  for (let r = 1; r < matrix.length; r++) {
    for (let c = 0; c < r; c++) {
      swap({ r, c }, { r: c, c: r });
    }
  }
};
// @lc code=end

