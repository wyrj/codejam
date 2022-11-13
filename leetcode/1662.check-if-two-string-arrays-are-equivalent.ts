/*
 * @lc app=leetcode id=1662 lang=typescript
 *
 * [1662] Check If Two String Arrays are Equivalent
 */

// @lc code=start
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join('') === word2.join('');
};
// @lc code=end

