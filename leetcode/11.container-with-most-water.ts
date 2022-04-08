/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return max;
};
// @lc code=end

maxArea([1, 1]);