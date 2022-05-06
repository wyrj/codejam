/*
 * @lc app=leetcode id=1679 lang=typescript
 *
 * [1679] Max Number of K-Sum Pairs
 */

// @lc code=start
function maxOperations(nums: number[], k: number): number {
  const m = new Map<number, number>();
  for (const n of nums) {
    m.set(n, (m.get(n) ?? 0) + 1);
  }
  const half = k / 2;
  let ans = 0;
  for (const [key, count] of m) {
    if (key < half) {
      ans += Math.min(count, m.get(k - key) ?? 0);
    } else if (key === half) {
      ans += Math.floor(count / 2);
    }
  }
  return ans;
};
// @lc code=end

