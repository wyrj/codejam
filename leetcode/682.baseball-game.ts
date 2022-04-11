/*
 * @lc app=leetcode id=682 lang=typescript
 *
 * [682] Baseball Game
 */

// @lc code=start
function calPoints(ops: string[]): number {
  const scores: number[] = [];
  for (const o of ops) {
    if (o === 'C') {
      scores.pop();
    } else if (o === 'D') {
      scores.push(scores[scores.length - 1] * 2);
    } else if (o === '+') {
      scores.push(scores[scores.length - 2] + scores[scores.length - 1]);
    } else {
      scores.push(parseInt(o, 10));
    }
  }
  return scores.reduce((s, v) => s + v, 0);
};
// @lc code=end

