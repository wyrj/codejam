/*
 * @lc app=leetcode id=890 lang=typescript
 *
 * [890] Find and Replace Pattern
 */

// @lc code=start
function findAndReplacePattern(words: string[], pattern: string): string[] {
  return words.filter((word) => {
    const map = new Map<string, string>();
    const reverseMap = new Map<string, string>();
    for (let i = 0; i < word.length; i++) {
      let w = word.charAt(i);
      let p = pattern.charAt(i);
      let char = map.get(w);
      if (char === undefined) {
        map.set(w, p);
      } else if (char !== p) {
        return false;
      }
      char = reverseMap.get(p);
      if (char === undefined) {
        reverseMap.set(p, w);
      } else if (char !== w) {
        return false;
      }
    }
    return true;
  })
};
// @lc code=end

