/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  function flood(r: number, c: number): void {
    if (
      r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      grid[r][c] === '0'
    ) {
      return;
    }
    grid[r][c] = '0';
    flood(r - 1, c);
    flood(r + 1, c);
    flood(r, c - 1);
    flood(r, c + 1);
  }
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === '1') {
        count += 1;
        flood(r, c);
      }
    }
  }
  return count;
};
// @lc code=end

