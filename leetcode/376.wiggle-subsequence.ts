/*
 * @lc app=leetcode id=376 lang=typescript
 *
 * [376] Wiggle Subsequence
 */

// @lc code=start
function wiggleMaxLength(nums: number[]): number {
  let ans = 1;
  let lastDiff = 0;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff !== 0 && diff * lastDiff <= 0) {
      ans += 1;
      lastDiff = diff;
    }
  }
  return ans;
};
// @lc code=end

