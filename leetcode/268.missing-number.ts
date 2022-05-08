/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  return nums.reduce((n, v) => n - v, (nums.length + 1) * nums.length / 2)
};
// @lc code=end

