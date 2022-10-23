/*
 * @lc app=leetcode id=1832 lang=typescript
 *
 * [1832] Check if the Sentence Is Pangram
 */

// @lc code=start
function checkIfPangram(sentence: string): boolean {
  const s = new Set(Array.from({ length: 26 }, (_, idx) => String.fromCharCode(idx)));
  for (const char of sentence) {
    s.delete(char);
  }
  return s.size === 0;
};
// @lc code=end

