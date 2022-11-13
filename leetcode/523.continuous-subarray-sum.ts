/*
 * @lc app=leetcode id=523 lang=typescript
 *
 * [523] Continuous Subarray Sum
 */

// @lc code=start
function checkSubarraySum(nums: number[], k: number): boolean {
  const s = new Set<number>();
  let r = 0;
  let next = 0;
  for (const n of nums) {
    next = (next + n) % k;
    if (s.has(next)) {
      return true;
    }
    s.add(r);
    r = next;
  }
  return false;
};
// @lc code=end

