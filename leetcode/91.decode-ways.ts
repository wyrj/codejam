/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string): number {
  const dp = new Array(s.length).fill(1);
  const base = '0'.charCodeAt(0);
  let last = s.charCodeAt(0) - base;
  dp[0] = last === 0 ? 0 : 1;
  for (let i = 1; i < s.length; i++) {
    const n = s.charCodeAt(i) - base;
    if (last === 0 && n === 0) {
      return 0;
    }
    dp[i] = n === 0 ? 0 : dp[i - 1];
    if (last !== 0 && (last * 10 + n <= 26)) {
      dp[i] += (dp[i - 2] ?? 1);
    }
    last = n;
  }
  return dp[s.length - 1];
};
// @lc code=end

