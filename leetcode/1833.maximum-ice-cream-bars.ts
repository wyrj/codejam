/*
 * @lc app=leetcode id=1833 lang=typescript
 *
 * [1833] Maximum Ice Cream Bars
 */

// @lc code=start
function maxIceCream(costs: number[], coins: number): number {
  costs.sort((lhs, rhs) => lhs - rhs);
  let result = 0;
  while (result < costs.length && coins >= costs[result]) {
    coins -= costs[result];
    result += 1;
  }
  return result;
};
// @lc code=end

