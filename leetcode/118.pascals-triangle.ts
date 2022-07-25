/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const result: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    const row = [1];
    for (let j = 1; j <= i; j++) {
      row.push(j === i ? 1 : result[i - 1][j - 1] + result[i - 1][j]);
    }
    result.push(row);
  }
  return result;
};
// @lc code=end

