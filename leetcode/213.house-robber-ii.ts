/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */

// @lc code=start
function rob(nums: number[]): number {
  function dp(start: number, end: number): number {
    if (end < start) {
      return 0;
    }
    const table = new Array(end - start + 1).fill(0);
    for (let i = 0; i < table.length; i++) {
      table[i] = Math.max(
        table[i - 1] ?? 0,
        (table[i - 2] ?? 0) + nums[start + i],
      );
    }
    return table[table.length - 1];
  }

  return Math.max(dp(1, nums.length - 1), nums[0] + dp(2, nums.length - 2));
};
// @lc code=end

