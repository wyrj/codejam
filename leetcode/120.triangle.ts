/*
 * @lc app=leetcode id=120 lang=typescript
 *
 * [120] Triangle
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  const result = triangle[triangle.length - 1].slice();
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      result[j] = Math.min(result[j], result[j + 1]) + triangle[i][j];
    }
  }
  return result[0];
};
// @lc code=end

