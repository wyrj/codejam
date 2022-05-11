/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroIndex = nums.indexOf(0);
  let nonZeroIndex = zeroIndex + 1;
  while (zeroIndex < nums.length) {
    while (nonZeroIndex < nums.length && nums[nonZeroIndex] === 0) {
      nonZeroIndex += 1;
    }
    if (nums[zeroIndex] === 0 && nonZeroIndex < nums.length) {
      const temp = nums[zeroIndex];
      nums[zeroIndex] = nums[nonZeroIndex];
      nums[nonZeroIndex] = temp;
      nonZeroIndex += 1;
    }
    zeroIndex += 1;
  }
};
// @lc code=end

