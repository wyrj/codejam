/*
 * @lc app=leetcode id=1647 lang=typescript
 *
 * [1647] Minimum Deletions to Make Character Frequencies Unique
 */

// @lc code=start
function minDeletions(s: string): number {
  const bucket = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);
  for (const char of s) {
    bucket[char.charCodeAt(0) - base] += 1;
  }
  bucket.sort((lhs, rhs) => lhs - rhs);
  let ans = 0;
  for (let i = 25; i > 0; i--) {
    if (bucket[i - 1] > 0 && bucket[i] <= bucket[i - 1]) {
      const diff = bucket[i - 1] - bucket[i] + (bucket[i] === 0 ? 0 : 1);
      bucket[i - 1] -= diff;
      ans += diff;
    }
  }
  return ans;
};
// @lc code=end

minDeletions('aaabbbcc');