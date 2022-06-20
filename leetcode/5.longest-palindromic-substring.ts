/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const isPalindrome = Array.from(s, () => Array.from(s, () => false));
  let max = s.charAt(1);
  for (let len = 1; len <= s.length; len++) {
    for (let i = 0; i + len <= s.length; i++) {
      const j = i + len - 1;
      if (
        s.charAt(i) === s.charAt(j) &&
        (len <= 2 || isPalindrome[i + 1][j - 1])
      ) {
        isPalindrome[i][j] = true;
        max = s.slice(i, j + 1);
      }
    }
  }
  return max;
};
// @lc code=end

