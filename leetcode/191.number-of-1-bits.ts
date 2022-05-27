/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      count += 1;
    }
    n = Math.floor(n / 2);
  }
  return count;
};
// @lc code=end

