/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const s = new Set<number>();
  for (const n of nums) {
    if (s.has(n)) {
      return true;
    }
    s.add(n);
  }
  return false;
};
// @lc code=end

