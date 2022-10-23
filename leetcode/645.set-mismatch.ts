/*
 * @lc app=leetcode id=645 lang=typescript
 *
 * [645] Set Mismatch
 */

// @lc code=start
function findErrorNums(nums: number[]): number[] {
  const result: number[] = [];
  let s = new Set();
  for (const n of nums) {
    if (s.has(n)) {
      result.push(n);
    }
    s.add(n);
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!s.has(i)) {
      result.push(i);
      break;
    }
  }
  return result;
};
// @lc code=end

