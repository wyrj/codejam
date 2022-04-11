/*
 * @lc app=leetcode id=1260 lang=typescript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
function shiftGrid(grid: number[][], k: number): number[][] {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  const result = Array.from(grid, () => new Array(colCount));
  const count = rowCount * colCount;
  for (let i = 0; i < count; i++) {
    const idx = (i + k) % count;
    result[Math.floor(idx / colCount)][idx % colCount] = grid[Math.floor(i / colCount)][i % colCount];
  }
  return result;
};
// @lc code=end

