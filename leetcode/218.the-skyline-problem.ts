/*
 * @lc app=leetcode id=218 lang=typescript
 *
 * [218] The Skyline Problem
 */
import _ from 'lodash';

// @lc code=start
enum ACTION {
  PUSH = 0,
  POP = 1,
}
function getSkyline(buildings: number[][]): number[][] {
  const swipe: Array<{ action: ACTION, index: number, height: number}> = [];
  for (const [left, right, height] of buildings) {
    swipe.push({ action: ACTION.PUSH, index: left, height });
    swipe.push({ action: ACTION.POP, index: right, height });
  }
  swipe.sort((lhs, rhs) => {
    return (lhs.index - rhs.index) || (rhs.height - lhs.height) || (lhs.action - rhs.action);
  });
  const ans: Array<[number, number]> = [];
  const heights: number[] = [];
  for (const { action, index, height } of swipe) {
    if (ans.length === 0) {
      ans.push([index, height]);
      heights.push(height);
      continue;
    }
    const last = ans[ans.length - 1];
    const idx = _.sortedIndex(heights, height);
    if (action === ACTION.PUSH) {
      if (last[1] < height) {
        ans.push([index, height]);
      }
      heights.splice(idx, 0, height);
    } else {
      heights.splice(idx, 1);
      if (last[0] === index) {
        last[1] = heights.length > 0 ? heights[heights.length - 1] : 0;
      } else if (heights.length > 0 && heights[heights.length - 1] < height) {
        ans.push([index, heights[heights.length - 1]])
      } else if (heights.length === 0) {
        ans.push([index, 0]);
      }
    }
  }
  return ans;
};
// @lc code=end
getSkyline([[1, 2, 1], [1, 2, 2], [1, 2, 3]])
