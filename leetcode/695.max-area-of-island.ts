/*
 * @lc app=leetcode id=695 lang=typescript
 *
 * [695] Max Area of Island
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  function flood(row: number, col: number): number {
    if (
      row < 0 ||
      col < 0 ||
      row >= rowCount ||
      col >= colCount ||
      grid[row][col] === 0
    ) {
      return 0;
    }
    grid[row][col] = 0;
    return 1 + flood(row - 1, col) + flood(row + 1, col) + flood(row, col - 1) + flood(row, col + 1);
  }
  let max = 0;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, flood(i, j));
      }
    }
  }
  return max;
};
// @lc code=end

