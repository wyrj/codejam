/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

import _ from 'lodash';
// @lc code=start
function lengthOfLIS(nums: number[]): number {
  const tail: number[] = [];
  for (const num of nums) {
    if (tail.length === 0) {
      tail.push(num);
      continue;
    }
    const index = _.sortedIndex(tail, num);
    if (index === tail.length) {
      tail.push(num);
    } else {
      tail[index] = num;
    }
  }
  return tail.length;
};
// @lc code=end