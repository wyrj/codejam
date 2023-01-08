/*
 * @lc app=leetcode id=944 lang=typescript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  const n = strs[0].length;
  const deletion = new Array(n).fill(false);
  let delCount = 0;
  for (let si = 1; si < strs.length; si++) {
    for (let i = 0; i < n; i++) {
      if (!deletion[i] && strs[si].charCodeAt(i) < strs[si - 1].charCodeAt(i)) {
        deletion[i] = true;
        delCount += 1;
      }
    }
  }
  return delCount;
};
// @lc code=end

