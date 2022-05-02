/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const s = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      s.delete(nums[i - k - 1]);
    }
    if (s.has(nums[i])) {
      return true;
    }
    s.add(nums[i]);
  }
  return false;
};
// @lc code=end

