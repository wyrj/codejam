/*
 * @lc app=leetcode id=354 lang=typescript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
function maxEnvelopes(envelopes: number[][]): number {
  const nums = envelopes.sort((lhs, rhs) => (lhs[0] - rhs[0]) || (rhs[1] - lhs[1])).map(e => e[1]);
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

