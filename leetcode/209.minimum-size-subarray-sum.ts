/*
 * @lc app=leetcode id=209 lang=typescript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let ans = 0;
  let leftIndex = 0;
  let rightIndex = 0;
  let sum = nums[0];
  function moveLeftIndex(): void {
    sum -= nums[leftIndex];
    leftIndex += 1;
  }
  function moveRightIndex(): void {
    rightIndex += 1;
    sum += nums[rightIndex];
  }
  while (rightIndex < nums.length) {
    if (ans === 1) {
      break;
    }
    if (sum >= target) {
      if (ans === 0 || rightIndex - leftIndex + 1 < ans) {
        ans = rightIndex - leftIndex + 1;
      }
      moveLeftIndex();
    } else {
      moveRightIndex();
    }
    while (rightIndex < leftIndex) {
      moveRightIndex();
    }
  }
  return ans;
};
// @lc code=end

