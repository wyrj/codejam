/*
 * @lc app=leetcode id=718 lang=typescript
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
  const table: number[][] = [];
  let max = 0;
  for (let i = 0; i < nums1.length; i++) {
    table[i] = [];
    for (let j = 0; j < nums2.length; j++) {
      table[i][j] = nums1[i] === nums2[j]
        ? (1 + ((i > 0 && j > 0) ? table[i - 1][j - 1] : 0))
        : 0;
      max = Math.max(max, table[i][j]);
    }
  }
  return max;
};
// @lc code=end

