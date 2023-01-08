/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let end = 0;
  let now = 0;
  while (now <= end) {
    end = Math.min(nums.length - 1, Math.max(end, now + nums[now]));
    now += 1;
  }
  return end === nums.length - 1;
};
// @lc code=end

