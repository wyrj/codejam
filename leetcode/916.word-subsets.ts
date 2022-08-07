/*
 * @lc app=leetcode id=916 lang=typescript
 *
 * [916] Word Subsets
 */

// @lc code=start
function wordSubsets(words1: string[], words2: string[]): string[] {
  const base = 'a'.charCodeAt(0);
  const map = new Array(26).fill(0);
  for (const word of words2) {
    const local = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      const code = word.charCodeAt(i) - base;
      local[code] += 1;
      map[code] = Math.max(map[code], local[code]);
    }
  }
  const ans: string[] = [];
  for (const word of words1) {
    const local = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      const code = word.charCodeAt(i) - base;
      local[code] += 1;
    }
    if (local.every((n, idx) => n >= map[idx])) {
      ans.push(word);
    }
  }
  return ans;
};
// @lc code=end

