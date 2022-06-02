/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  return nums.reduce((arr, n) => {
    arr.push((arr[arr.length - 1] ?? 0) + n);
    return arr;
  }, <number[]>[])
};
// @lc code=end

