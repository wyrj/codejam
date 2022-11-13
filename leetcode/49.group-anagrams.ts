/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const base = 'a'.charCodeAt(0);
  const map = new Map<string, string[]>();
  for (const word of strs) {
    const appear = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
      appear[word.charCodeAt(i) - base] += 1;
    }
    const key = appear.join(',');
    const arr = map.get(key);
    if (arr !== undefined) {
      arr.push(word);
    } else {
      map.set(key, [word]);
    }
  }
  return Array.from(map.values());
};
// @lc code=end

groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]);