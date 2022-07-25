/*
 * @lc app=leetcode id=792 lang=typescript
 *
 * [792] Number of Matching Subsequences
 */

// @lc code=start
function numMatchingSubseq(s: string, words: string[]): number {
  const indexes = new Array(words.length).fill(0);
  let result = 0;
  for (const char of s) {
    for (let i = 0; i < words.length; i++) {
      if (indexes[i] < words[i].length && words[i].charAt(indexes[i]) === char) {
        indexes[i] += 1;
        if (indexes[i] === words[i].length) {
          result += 1;
        }
      }
    }
  }
  return result;
};
// @lc code=end

