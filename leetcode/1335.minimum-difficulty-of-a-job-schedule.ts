/*
 * @lc app=leetcode id=1335 lang=typescript
 *
 * [1335] Minimum Difficulty of a Job Schedule
 */

// @lc code=start
function minDifficulty(jobDifficulty: number[], d: number): number {
  if (jobDifficulty.length < d) {
    return -1;
  }
  const dp = new Map<string, number>();
  function getDifficulty(idx: number, day: number): number {
    const key = `${idx},${day}`;
    let value = dp.get(key);
    if (value === undefined) {
      if (day === 1) {
        value = Math.max(...jobDifficulty.slice(idx));
      } else {
        const len = jobDifficulty.length - day;
        let difficulty = jobDifficulty[idx];
        value = difficulty + getDifficulty(idx + 1, day - 1);
        for (let i = idx + 1; i <= len; i++) {
          difficulty = Math.max(difficulty, jobDifficulty[i]);
          value = Math.min(value, difficulty + getDifficulty(i + 1, day - 1))
        }
      }
      dp.set(key, value);
    }
    return value;
  }

  return getDifficulty(0, d);
};
// @lc code=end

console.log(minDifficulty([11,111,22,222,33,333,44,444], 6));