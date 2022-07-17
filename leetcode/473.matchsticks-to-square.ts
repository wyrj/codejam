/*
 * @lc app=leetcode id=473 lang=typescript
 *
 * [473] Matchsticks to Square
 */

// @lc code=start
function makesquare(matchsticks: number[]): boolean {
  matchsticks.sort((lhs, rhs) => rhs - lhs);
  const sum = matchsticks.reduce((s, v) => s + v, 0);
  if (sum % 4 !== 0 || matchsticks[0] > sum / 4) {
    return false;
  }
  const remain = new Array(4).fill(sum / 4);
  const visit = new Set<string>();
  function recursive(idx: number): boolean {
    if (idx === matchsticks.length) {
      return true;
    }
    const hash = `${remain.join(',')},${idx}`;
    if (visit.has(hash)) {
      return false;
    }
    const value = matchsticks[idx];
    let result = false;
    const set = new Set<number>();
    for (let i = 0; i < 4 && !result; i++) {
      if (!set.has(remain[i]) && remain[i] >= value) {
        set.add(remain[i]);
        remain[i] -= value;
        result = recursive(idx + 1);
        remain[i] += value;
      }
    }
    if (!result) {
      visit.add(hash);
    }
    return result;
  }
  return recursive(0);
};
// @lc code=end

