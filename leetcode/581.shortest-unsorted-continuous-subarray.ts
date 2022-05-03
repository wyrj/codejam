/*
 * @lc app=leetcode id=581 lang=typescript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
function findUnsortedSubarray(nums: number[]): number {
  let left = 0;
  while (left < nums.length - 1) {
    if (nums[left] > nums[left + 1]) {
      break;
    }
    left += 1;
  }
  if (left === nums.length - 1) {
    return 0;
  }
  let min = nums[left + 1];
  let leftIndex = left;
  while (leftIndex > 0 && nums[leftIndex - 1] > min) {
    leftIndex -= 1;
  }
  let max = nums[left];
  let rightIndex = left + 1;
  let currentIndex = left + 2;
  while (currentIndex < nums.length) {
    if (nums[currentIndex] < max) {
      rightIndex = currentIndex;
    } else {
      max = nums[currentIndex];
    }
    if (nums[currentIndex] < min) {
      min = nums[currentIndex];
      while (leftIndex > 0 && nums[leftIndex - 1] > min) {
        leftIndex -= 1;
      }
    }
    currentIndex += 1;
  }
  return rightIndex - leftIndex + 1;
};
// @lc code=end

