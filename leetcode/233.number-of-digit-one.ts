/*
 * @lc app=leetcode id=233 lang=typescript
 *
 * [233] Number of Digit One
 */

// @lc code=start
function countDigitOne(n: number): number {
  let count = 0;
  let base = 1;
  while (n >= base) {
    count += Math.floor(n / base / 10) * base;
    const b = n % (base * 10);
    count += (b >= 2 * base) ? base : (b >= base ? b % base + 1 : 0);
    base *= 10;
  }
  return count;
};
// @lc code=end
countDigitOne(100);
