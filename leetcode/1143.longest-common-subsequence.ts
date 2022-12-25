/*
 * @lc app=leetcode id=1143 lang=typescript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  const table = Array.from(text1, () => new Array(text2.length).fill(0));
  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      table[i][j] = (text1.charAt(i) === text2.charAt(j))
        ? (table[i - 1]?.[j - 1] ?? 0) + 1
        : Math.max((table[i - 1]?.[j] ?? 0), (table[i][j - 1] ?? 0));
    }
  }
  return table[text1.length - 1][text2.length - 1];
};
// @lc code=end

longestCommonSubsequence('abcde', 'ace');