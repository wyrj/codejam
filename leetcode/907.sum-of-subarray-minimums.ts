/*
 * @lc app=leetcode id=907 lang=typescript
 *
 * [907] Sum of Subarray Minimums
 */

// @lc code=start
const mod = 1e9 + 7;
function sumSubarrayMins(arr: number[]): number {
  const queue = [arr];
  let sum = 0;
  while (queue.length > 0) {
    const a = queue.pop() as number[];
    if (a.length === 0) {
      continue;
    }
    let idx = 0;
    let min = a[0];
    for (let i = 1; i < a.length; i++) {
      if (a[i] < min) {
        min = a[i];
        idx = i;
      }
    }
    sum = (sum + min * ((idx + 1) * (a.length - idx)) % mod) % mod;
    queue.push(a.slice(0, idx), a.slice(idx + 1));
  }
  return sum;
};
// @lc code=end

