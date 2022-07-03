/*
 * @lc app=leetcode id=462 lang=typescript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

// @lc code=start
function minMoves2(nums: number[]): number {
  const map = new Map<number, number>();
  function check(n: number): number {
    let result = map.get(n);
    if (result === undefined) {
      result = nums.reduce((s, v) => s + (Math.abs(v - n)), 0);
      map.set(n, result);
    }
    return result;
  }
  let low = Math.min(...nums);
  let high = Math.max(...nums);
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const moves = [mid - 1, mid, mid + 1].map(check);
    if (moves[1] <= moves[0] && moves[1] <= moves[2]) {
      return moves[1];
    } else if (moves[0] <= moves[1]) {
      high = mid;
    } else {
      low = mid;
    }
  }
  return check(low);
};
// @lc code=end

