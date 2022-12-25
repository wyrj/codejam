/*
 * @lc app=leetcode id=1207 lang=typescript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
function uniqueOccurrences(arr: number[]): boolean {
  const count = new Array(2001).fill(0);
  for (const n of arr) {
    count[n + 1000] += 1;
  }
  const f = count.filter(n => n > 0);
  return new Set(f).size === f.length;
};
// @lc code=end

