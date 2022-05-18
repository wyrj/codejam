/*
 * @lc app=leetcode id=318 lang=typescript
 *
 * [318] Maximum Product of Word Lengths
 */

// @lc code=start
function maxProduct(words: string[]): number {
  const base = 'a'.charCodeAt(0);
  const hash = words.map(s => {
    let r = 0;
    for (const char of s) {
      r |= Math.pow(2, (char.charCodeAt(0) - base));
    }
    return r;
  });
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((hash[i] & hash[j]) === 0) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }
  return max;
};
// @lc code=end

maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"])