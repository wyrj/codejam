/*
 * @lc app=leetcode id=275 lang=typescript
 *
 * [275] H-Index II
 */

import { checkPrime } from "crypto";

// @lc code=start
function hIndex(citations: number[]): number {
  function check(i: number): boolean {
    return citations[i] >= citations.length - i;
  }

  let low = 0;
  let high = citations.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (check(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return citations.length - high;
};
// @lc code=end

