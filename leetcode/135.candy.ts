/*
 * @lc app=leetcode id=135 lang=typescript
 *
 * [135] Candy
 */

// @lc code=start
function candy(ratings: number[]): number {
  const result = ratings.map(() => 1);
  for (let i = 1; i < result.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      result[i] = result[i - 1] + 1;
    }
  }
  for (let i = result.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
      result[i - 1] = Math.max(result[i - 1], result[i] + 1);
    }
  }
  return result.reduce((s, v) => s + v, 0);
};
// @lc code=end

