/*
 * @lc app=leetcode id=1704 lang=typescript
 *
 * [1704] Determine if String Halves Are Alike
 */

// @lc code=start
function halvesAreAlike(s: string): boolean {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  function countVowel(str: string): number {
    return Array.from(str).filter(char => vowels.includes(char)).length;
  }
  return countVowel(s.slice(0, s.length / 2)) === countVowel(s.slice(s.length / 2));
};
// @lc code=end

