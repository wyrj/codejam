/*
 * @lc app=leetcode id=630 lang=typescript
 *
 * [630] Course Schedule III
 */
import * as _ from 'lodash';

// @lc code=start
function scheduleCourse(courses: number[][]): number {
  courses.sort((lhs, rhs) => (lhs[1] - rhs[1]));
  const q: number[] = [];
  let time = 0;
  for (const [duration, lastTime] of courses) {
    time += duration;
    q.splice(_.sortedIndex(q, duration), 0, duration);
    while (time > lastTime) {
      const v = q.pop();
      time -= <number>v;
    }
  }
  return q.length;
};
// @lc code=end
