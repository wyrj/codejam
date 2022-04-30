/*
 * @lc app=leetcode id=204 lang=typescript
 *
 * [204] Count Primes
 */

// @lc code=start
function countPrimes(n: number): number {
  const record = new Array(n).fill(true);
  let ans = Math.max(0, n - 2);
  for (let i = 2; i < n; i++) {
    let now = i * 2;
    while (now <= n) {
      if (record[now]) {
        ans -= 1;
        record[now] = false;
      }
      now += i;
    }
  }
  return ans;
};
// @lc code=end

