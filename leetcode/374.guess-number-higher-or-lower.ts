/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  let low = 1;
  let high = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const result = guess(mid);
    if (result === 0) {
      return mid;
    }
    if (result === 1) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return 0;
};
// @lc code=end

