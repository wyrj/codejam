/*
 * @lc app=leetcode id=378 lang=typescript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */
import _ from 'lodash';

// @lc code=start
function kthSmallest(matrix: number[][], k: number): number {
  const max = (_.last(_.last(matrix)) as number);
  function test(n: number): [number, number] {
    let nth = 0;
    let num = max;
    for (const row of matrix) {
      const localNth = _.sortedIndex(row, n);
      nth = nth + localNth;
      if (localNth < row.length) {
        num = Math.min(num, row[localNth]);
      }
    }
    return [nth, num];
  }
  let low = matrix[0][0];
  let high = max + 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const [nth, num] = test(mid);
    if (nth === k - 1) {
      return num;
    } else if (nth > k - 1) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return high - 1;
};
// @lc code=end

