/*
 * @lc app=leetcode id=1209 lang=typescript
 *
 * [1209] Remove All Adjacent Duplicates in String II
 */

// @lc code=start
function removeDuplicates(s: string, k: number): string {
  const ans = <string[]>[];
  for (const n of s) {
    ans.push(n);
    if (ans.length >= k && ans.slice(ans.length - k).every(c => c === n)) {
      ans.length -= k;
    }
  }
  return ans.join('');
};
// @lc code=end

