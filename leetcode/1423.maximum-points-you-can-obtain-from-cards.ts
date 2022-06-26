/*
 * @lc app=leetcode id=1423 lang=typescript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 */

// @lc code=start
function maxScore(cardPoints: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += cardPoints[i];
  }
  let max = sum;
  if (cardPoints.length > k) {
    for (let i = k - 1; i >= 0; i--) {
      sum -= cardPoints[i];
      sum += cardPoints[cardPoints.length - (k - i)];
      max = Math.max(max, sum);
    }
  }
  return max;
};
// @lc code=end

