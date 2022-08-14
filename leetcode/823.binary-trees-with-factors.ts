/*
 * @lc app=leetcode id=823 lang=typescript
 *
 * [823] Binary Trees With Factors
 */

// @lc code=start
function numFactoredBinaryTrees(arr: number[]): number {
  arr.sort((lhs, rhs) => lhs - rhs);
  const dp = new Map<number, number>();
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    let local = 1;
    for (let j = 0; j < i; j++) {
      const m = arr[j];
      if (n % m === 0) {
        local = (local + (dp.get(m) ?? 0) * (dp.get(n / m) ?? 0)) % (1e9 + 7);
      }
    }
    dp.set(n, local);
    ans = (ans + local) % (1e9 + 7);
  }
  return ans;
};
// @lc code=end
