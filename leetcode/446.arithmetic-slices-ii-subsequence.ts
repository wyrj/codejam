/*
 * @lc app=leetcode id=446 lang=typescript
 *
 * [446] Arithmetic Slices II - Subsequence
 */

// @lc code=start
function numberOfArithmeticSlices(nums: number[]): number {
  const maps = Array.from(nums, () => new Map<number, number>());
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const countJ = (maps[j].get(diff) ?? 0);
      result += countJ
      maps[i].set(diff, (maps[i].get(diff) ?? 0) + countJ + 1);
    }
  }
  return result;
};
// @lc code=end

