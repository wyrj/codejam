/*
 * @lc app=leetcode id=1642 lang=typescript
 *
 * [1642] Furthest Building You Can Reach
 */
import _ from 'lodash';

// @lc code=start
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const q: number[] = [];
  for (let i = 0; i < heights.length - 1; i++) {
    const diff = heights[i + 1] - heights[i];
    if (diff > 0) {
      if (q.length < ladders) {
        q.splice(_.sortedIndex(q, diff), 0, diff);
      } else {
        bricks -= Math.min(diff, q.length > 0 ? q[0] : 1e6);
        if (bricks < 0) {
          return i;
        }
        if (diff > q[0]) {
          q.shift();
          q.splice(_.sortedIndex(q, diff), 0, diff);
        }
      }
    }
  }
  return heights.length - 1;
};
// @lc code=end

