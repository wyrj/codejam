/*
 * @lc app=leetcode id=746 lang=typescript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
  const table = cost.map(() => 0);
  table[0] = cost[0];
  table[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    table[i] = Math.min(table[i - 1], table[i - 2]) + cost[i];
  }
  return Math.min(table[cost.length - 1], table[cost.length - 2]);
};
// @lc code=end

