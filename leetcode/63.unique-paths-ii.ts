/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rowCount = obstacleGrid.length;
  const colCount = obstacleGrid[0].length;
  const table: number[][] = [];
  for (let i = 0; i < rowCount; i++) {
    const row = obstacleGrid[i];
    table[i] = [];
    for (let j = 0; j < colCount; j++) {
      if (obstacleGrid[i][j] === 1) {
        table[i][j] = 0;
      } else if (i === 0 && j === 0) {
        table[i][j] = 1;
      } else if (i === 0) {
        table[i][j] = table[i][j - 1];
      } else if (j === 0) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = table[i - 1][j] + table[i][j - 1];
      }
    }
  }
  return table[rowCount - 1][colCount - 1];
};
// @lc code=end

