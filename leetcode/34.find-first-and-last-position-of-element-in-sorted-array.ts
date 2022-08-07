/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  const lowerIndex = _.sortedIndex(nums, target);
  if (nums[lowerIndex] !== target) {
    return [-1, -1];
  }
  const higherIndex = _.sortedLastIndex(nums, target);
  if (nums[higherIndex - 1] !== target) {
    return [-1, -1];
  }
  return [lowerIndex, higherIndex - 1];
};
// @lc code=end

