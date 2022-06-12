/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    const n = numbers[low] + numbers[high];
    if (n === target) {
      return [low + 1, high + 1];
    } else if (n > target) {
      high -= 1;
    } else if (n < target) {
      low += 1;
    }
  }
  return [1, 2];
};
// @lc code=end

