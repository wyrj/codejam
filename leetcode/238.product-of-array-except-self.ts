/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const zeroCount = nums.filter(v => v === 0).length;
  if (zeroCount > 1) {
    return new Array(nums.length).fill(0);
  } else {
    const m = nums.reduce((m, v) => v === 0 ? m : (m * v), 1);
    if (zeroCount === 1) {
      return nums.map(v => v === 0 ? m : 0);
    } else {
      return nums.map(v => (m / v));
    }
  }
};
// @lc code=end

