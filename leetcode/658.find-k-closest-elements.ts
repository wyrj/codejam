/*
 * @lc app=leetcode id=658 lang=typescript
 *
 * [658] Find K Closest Elements
 */
import _ from 'lodash';

// @lc code=start
function findClosestElements(arr: number[], k: number, x: number): number[] {
  const index = _.sortedIndex(arr, x);
  let leftIndex = index - 1;
  let rightIndex = index;
  while (rightIndex - leftIndex - 1 < k) {
    if (leftIndex < 0) {
      return arr.slice(0, k);
    } else if (rightIndex === arr.length) {
      return arr.slice(arr.length - k);
    }
    if (arr[rightIndex] - x < x - arr[leftIndex]) {
      rightIndex += 1;
    } else {
      leftIndex -= 1;
    }
  }
  return arr.slice(leftIndex + 1, leftIndex + 1 + k);
};
// @lc code=end

