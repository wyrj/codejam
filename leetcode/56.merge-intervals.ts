/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    intervals.sort((lhs, rhs) => ((lhs[0] - rhs[0]) || (lhs[1] - rhs[1])));
    const ans = [intervals[0]];
    let now = ans[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= now[1]) {
            now[1] = Math.max(now[1], intervals[i][1]);
        } else {
            now = intervals[i];
            ans.push(now);
        }
    }
    return ans;
};
// @lc code=end

