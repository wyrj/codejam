/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: (n: number) => boolean) {

  return function(n: number): number {
    let low = 0;
    let high = n + 1;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (isBadVersion(mid)) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return high;
  };
};
// @lc code=end

