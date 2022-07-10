/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const s = new Set<number>(nums);
  let max = 0;
  while (s.size > 0) {
    const n = s.values().next().value;
    s.delete(n);
    let now = n + 1;
    let longest = 1;
    while (s.has(now)) {
      s.delete(now);
      longest += 1;
      now += 1;
    }
    now = n - 1;
    while (s.has(now)) {
      s.delete(now);
      longest += 1;
      now -= 1;
    }
    max = Math.max(max, longest);
  }
  return max;
};
// @lc code=end

