/*
 * @lc app=leetcode id=334 lang=typescript
 *
 * [334] Increasing Triplet Subsequence
 */

import _ from 'lodash';
// @lc code=start
function increasingTriplet(nums: number[]): boolean {
  const q: number[] = [];
  for (const n of nums) {
    const index = _.sortedIndex(q, n);
    if (index === q.length) {
      q.push(n);
      if (q.length === 3) {
        return true;
      }
    } else {
      q[index] = n;
    }
  }
  return false;
};
// @lc code=end

