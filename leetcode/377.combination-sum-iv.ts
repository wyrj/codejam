/*
 * @lc app=leetcode id=377 lang=typescript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
function combinationSum4(nums: number[], target: number): number {
  nums.sort((lhs, rhs) => lhs - rhs);
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let t = 1; t <= target; t++) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= t) {
        dp[t] += dp[t - nums[i]];
      }
    }
  }
  return dp[target];
};
// @lc code=end

