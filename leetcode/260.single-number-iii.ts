/*
 * @lc app=leetcode id=260 lang=typescript
 *
 * [260] Single Number III
 */

// @lc code=start
function singleNumber(nums: number[]): number[] {
  const n = nums.reduce((r, v) => r ^ v, 0);
  let base = 1;
  while (n % (base * 2) === 0) {
    base *= 2;
  }
  let one = 0;
  let two = 0;
  for (const num of nums) {
    if ((num & base) === base) {
      one = one ^ num;
    } else {
      two = two ^ num;
    }
  }
  return [one, two];
};
// @lc code=end

