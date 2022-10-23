/*
 * @lc app=leetcode id=692 lang=typescript
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
function topKFrequent(words: string[], k: number): string[] {
  const map = new Map<string, number>();
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }
  return Array.from(map).sort((lhs, rhs) => {
    return (rhs[1] - lhs[1]) || ((lhs > rhs) ? 1 : -1);
  }).map(entry => entry[0]).slice(0, k);
};
// @lc code=end

