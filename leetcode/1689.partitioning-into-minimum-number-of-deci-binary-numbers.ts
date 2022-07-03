/*
 * @lc app=leetcode id=1689 lang=typescript
 *
 * [1689] Partitioning Into Minimum Number Of Deci-Binary Numbers
 */

// @lc code=start
function minPartitions(n: string): number {
  const base = '0'.charCodeAt(0);
  let max = 0;
  for (const char of n) {
    max = Math.max(max, char.charCodeAt(0) - base);
  }
  return max;
};
// @lc code=end

