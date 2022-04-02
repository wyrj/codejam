/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s.charAt(i) === s.charAt(len - i - 1)) {
      continue;
    }
    const sub = s.slice(i, len - i);
    const rev = sub.split('').reverse().join('');
    return sub.slice(1) === rev.slice(0, sub.length - 1)
      || sub.slice(0, sub.length - 1) === rev.slice(1);
  }
  return true;
};
// @lc code=end

