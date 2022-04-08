/*
 * @lc app=leetcode id=1046 lang=typescript
 *
 * [1046] Last Stone Weight
 */
import _ from 'lodash';

// @lc code=start
function lastStoneWeight(stones: number[]): number {
  stones.sort((lhs, rhs) => lhs - rhs);
  while (stones.length > 1) {
    const s1 = stones.pop();
    const s2 = stones.pop();
    if (s1 !== s2) {
      const index = _.sortedIndex(stones, s1 - s2);
      stones.splice(index, 0, s1 - s2);
    }
  }
  return stones[0] ?? 0;
};
// @lc code=end

lastStoneWeight([2, 7, 4, 1, 8, 1]);