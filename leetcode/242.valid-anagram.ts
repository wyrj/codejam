/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  function genMap(str: string): Map<string, number> {
    const m = new Map<string, number>();
    for (const char of str) {
      m.set(char, (m.get(char) ?? 0) + 1);
    }
    return m;
  }
  const sMap = genMap(s);
  const tMap = genMap(t);
  for (const [char, count] of sMap) {
    if (tMap.get(char) !== count) {
      return false;
    }
  }
  return true;
};
// @lc code=end

