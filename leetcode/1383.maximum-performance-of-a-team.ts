/*
 * @lc app=leetcode id=1383 lang=typescript
 *
 * [1383] Maximum Performance of a Team
 */
import _ from 'lodash';

// @lc code=start
interface Person {
  speed: number;
  efficiency: number;
}
function maxPerformance(n: number, speed: number[], efficiency: number[], k: number): number {
  const persons: Person[] = [];
  for (let i = 0; i < n; i++) {
    persons.push({ speed: speed[i], efficiency: efficiency[i] });
  }
  persons.sort((lhs, rhs) => ((rhs.efficiency - lhs.efficiency) || (rhs.speed - lhs.speed)));

  let max = { s: 0, e: 1e8 };
  let sum = 0;
  const pq: number[] = [];
  for (const { speed: s, efficiency: e } of persons) {
    if (pq.length >= k) {
      if (pq[0] >= s) {
        continue;
      }
      sum -= pq.shift() as number;
    }
    const index = _.sortedIndex(pq, s);
    pq.splice(index, 0, s);
    sum += s;
    if (sum / max.e > max.s / e) {
      max = { s: sum, e };
    }
  }
  return ((max.s % (1e9 + 7)) * (max.e)) % (1e9 + 7);
};
// @lc code=end

