/*
 * @lc app=leetcode id=406 lang=typescript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
function reconstructQueue(people: number[][]): number[][] {
  people.sort((lhs, rhs) => ((rhs[0] - lhs[0]) || (lhs[1] - rhs[1])));
  const ans: typeof people = [];
  for (const p of people) {
    ans.push(p);
    for (let i = ans.length - 1; i > p[1]; i--) {
      const tmp = ans[i];
      ans[i] = ans[i - 1];
      ans[i - 1] = tmp;
    }
  }
  return ans;
};
// @lc code=end

