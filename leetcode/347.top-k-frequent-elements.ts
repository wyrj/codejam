/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const n of nums) {
    const v = (map.get(n) ?? 0) + 1;
    map.set(n, v);
  }
  return Array.from(map.entries()).sort((lhs, rhs) => {
    return rhs[1] - lhs[1];
  }).slice(0, k).map(([v, count]) => v);
};
// @lc code=end

