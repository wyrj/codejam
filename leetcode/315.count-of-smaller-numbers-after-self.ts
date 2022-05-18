/*
 * @lc app=leetcode id=315 lang=typescript
 *
 * [315] Count of Smaller Numbers After Self
 */
import _ from 'lodash';

// @lc code=start
function countSmaller(nums: number[]): number[] {
  function r(start: number, end: number): { sorted: number[], smaller: number[], origin: number[] } {
    if (end === start) {
      return { origin: [start], smaller: [0], sorted: [nums[start]] };
    }
    const mid = start + Math.floor((end - start) / 2);
    const left = r(start, mid);
    const right = r(mid + 1, end);
    let rightRemain = right.sorted.length - 1;
    for (let i = left.sorted.length - 1; i >= 0; i--) {
      const num = left.sorted[i];
      while (rightRemain >= 0 && right.sorted[rightRemain] >= num) {
        rightRemain -= 1;
      }
      left.smaller[left.origin[i] - start] += rightRemain + 1;
    }

    const sorted: number[] = [];
    const index: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.sorted.length && rightIndex < right.sorted.length) {
      if (left.sorted[leftIndex] < right.sorted[rightIndex]) {
        sorted.push(left.sorted[leftIndex]);
        index.push(left.origin[leftIndex]);
        leftIndex += 1;
      } else {
        sorted.push(right.sorted[rightIndex]);
        index.push(right.origin[rightIndex]);
        rightIndex += 1;
      }
    }
    while (leftIndex < left.sorted.length) {
      sorted.push(left.sorted[leftIndex]);
      index.push(left.origin[leftIndex]);
      leftIndex += 1;
    }
    while (rightIndex < right.sorted.length) {
      sorted.push(right.sorted[rightIndex]);
      index.push(right.origin[rightIndex]);
      rightIndex += 1;
    }
    return { smaller: left.smaller.concat(right.smaller), sorted, origin: index };
  }
  return r(0, nums.length - 1).smaller;
};
// @lc code=end

countSmaller([5, 2, 6, 1]);