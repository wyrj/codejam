/*
 * @lc app=leetcode id=1332 lang=typescript
 *
 * [1332] Remove Palindromic Subsequences
 */

// @lc code=start
function removePalindromeSub(s: string): number {
  let low = 0;
  let high = s.length - 1;
  while (low < high) {
    if (s.charAt(low) !== s.charAt(high)) {
      return 2;
    }
    low += 1;
    high -= 1;
  }
  return 1;
};
// @lc code=end

