/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
  if (dividend === 0) {
    return 0;
  }
  const sign = (dividend > 0) === (divisor > 0);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let ans = 0;
  while (dividend >= divisor) {
    let shifted = divisor;
    let shiftCount = 0;
    while (dividend >= (shifted << 1) && (shifted << 1 > 0)) {
      shifted = shifted << 1;
      shiftCount += 1;
    }
    ans += 1 << shiftCount;
    dividend -= shifted;
  }
  if (!sign) {
    ans = -ans;
  }
  return ans === 2147483648 ? 2147483647 : ans;
};
// @lc code=end

