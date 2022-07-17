/*
 * @lc app=leetcode id=629 lang=typescript
 *
 * [629] K Inverse Pairs Array
 */

// @lc code=start
function kInversePairs(n: number, k: number): number {
  const dp = Array.from({length: n + 1}, () => new Array(k + 1).fill(0));
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }
  for (let i = 2; i <= n; i++) {
    const limit = Math.min(k, i * (i - 1) / 2);
    for (let j = 1; j <= limit; j++) {
      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1] + (j >= i ? -dp[i - 1][j - i] : 0) + (1e9 + 7)) % (1e9 + 7);
    }
  }
  return dp[n][k];
};
// @lc code=end
