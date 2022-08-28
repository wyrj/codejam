/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  return n > 0 && (n === 1 || (((n & n - 1) === 0) && (n | 0x55555555) === 0x55555555));
};
// @lc code=end

