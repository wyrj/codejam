/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const result = Array.from({ length: n }, () => new Array(n).fill(0));
  const coord = { row: 0, col: -1 };
  const direction = { row: 0, col: 1 };
  function next(): void {
    if (
      coord.row + direction.row < 0 ||
      coord.row + direction.row >= n ||
      coord.col + direction.col < 0 ||
      coord.col + direction.col >= n ||
      result[coord.row + direction.row][coord.col + direction.col] !== 0
    ) {
      if (direction.row === 0) {
        direction.row = direction.col;
        direction.col = 0;
      } else {
        direction.col = -direction.row;
        direction.row = 0;
      }
    }
    coord.row += direction.row;
    coord.col += direction.col;
  }
  for (let i = 1; i <= n * n; i++) {
    next();
    result[coord.row][coord.col] = i;
  }
  return result;
};
// @lc code=end
