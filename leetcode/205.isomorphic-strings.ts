/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const map = new Map<string, string>();
  const reverseMap = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    const charS = s.charAt(i);
    const charT = t.charAt(i);
    if ((map.get(charT) ?? charS) !== charS || (reverseMap.get(charS) ?? charT) !== charT) {
      return false;
    }
    map.set(charT, charS);
    reverseMap.set(charS, charT);
  }
  return true;
};
// @lc code=end

