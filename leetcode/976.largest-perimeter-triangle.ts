/*
 * @lc app=leetcode id=976 lang=typescript
 *
 * [976] Largest Perimeter Triangle
 */

// @lc code=start
function largestPerimeter(nums: number[]): number {
  nums.sort((lhs, rhs) => lhs - rhs);
  for (let i = nums.length - 3; i >= 0; i--) {
    if (nums[i] + nums[i + 1] > nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
};
// @lc code=end

