/*
 * @lc app=leetcode id=2007 lang=typescript
 *
 * [2007] Find Original Array From Doubled Array
 */

// @lc code=start
function findOriginalArray(changed: number[]): number[] {
  changed.sort((lhs, rhs) => lhs - rhs);
  const wating: number[] = [];
  const result: number[] = [];
  for (const n of changed) {
    if (wating.length === 0 || wating[0] > n) {
      wating.push(n * 2);
      result.push(n);
    } else if (wating[0] === n) {
      wating.shift();
    } else {
      return [];
    }
  }
  return wating.length === 0 ? result : [];
};
// @lc code=end

