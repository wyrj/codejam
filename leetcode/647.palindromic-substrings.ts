/*
 * @lc app=leetcode id=647 lang=typescript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
function countSubstrings(s: string): number {
  const table = Array.from(s, () => new Array(s.length).fill(false));
  for (let i = 0; i < s.length; i++) {
    table[i][i] = true;
  }
  let ans = s.length;
  for (let len = 2; len <= s.length; len++) {
    for (let i = 0; i <= s.length - len; i++) {
      if (s.charAt(i) === s.charAt(i + len - 1) && (len === 2 || table[i + 1][i + len - 2])) {
        table[i][i + len - 1] = true;
        ans += 1;
      }
    }
  }
  return ans;
};
// @lc code=end
