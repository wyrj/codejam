/*
 * @lc app=leetcode id=659 lang=typescript
 *
 * [659] Split Array into Consecutive Subsequences
 */

// @lc code=start
function isPossible(nums: number[]): boolean {
  const acc: number[][] = [];
  let index = -1;
  let last = -1002;
  for (const n of nums) {
    while (acc.length > 0 && acc[0][acc[0].length - 1] < n - 1) {
      if ((acc.shift() as number[]).length < 3) {
        return false;
      }
      index = acc.length - 1;
    }
    if (n === last + 1) {
      index = acc.length - 1;
    }
    if (index >= 0) {
      acc[index].push(n);
      index -= 1;
    } else {
      acc.push([n]);
    }
    last = n;
  }
  return !acc.some(arr => arr.length < 3);
};
// @lc code=end

isPossible([1, 2, 3, 3, 4, 5]);