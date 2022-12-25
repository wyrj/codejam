/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[]): number {
  const table = new Array(nums.length).fill(0);
  table[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    table[i] = Math.max(table[i - 1], nums[i] + (table[i - 2] ?? 0));
  }
  return table.at(-1);
};
// @lc code=end

