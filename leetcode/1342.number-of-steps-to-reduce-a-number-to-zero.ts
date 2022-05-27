/*
 * @lc app=leetcode id=1342 lang=typescript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
function numberOfSteps(num: number): number {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 1) {
      num -= 1;
    } else {
      num /= 2;
    }
    count += 1;
  }
  return count;
};
// @lc code=end

