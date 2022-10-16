/*
 * @lc app=leetcode id=1328 lang=typescript
 *
 * [1328] Break a Palindrome
 */

// @lc code=start
function breakPalindrome(palindrome: string): string {
  if (palindrome.length <= 1) {
    return '';
  }
  const half = Math.floor(palindrome.length / 2);
  for (let i = 0; i < half; i++) {
    if (palindrome.charAt(i) !== 'a') {
      return `${palindrome.slice(0, i)}a${palindrome.slice(i + 1)}`;
    }
  }
  return `${palindrome.slice(0, palindrome.length - 1)}b`;
};
// @lc code=end

