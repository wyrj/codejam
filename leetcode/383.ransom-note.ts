/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  const visitSet = new Set<string>();
  for (const char of magazine) {
    visitSet.add(char);
  }
  for (const char of ransomNote) {
    if (!visitSet.has(char)) {
      return false;
    }
  }
  return true;
};
// @lc code=end

