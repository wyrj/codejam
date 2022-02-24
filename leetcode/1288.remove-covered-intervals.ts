/*
 * @lc app=leetcode id=1288 lang=typescript
 *
 * [1288] Remove Covered Intervals
 */

// @lc code=start
function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((lhs, rhs) => {
        return (lhs[0] - rhs[0]) || (rhs[1] - lhs[1]);
    });
    let count = 0;
    let lastInterval = [-1, -1];
    for (const interval of intervals) {
        if (interval[1] > lastInterval[1]) {
            count += 1;
            lastInterval = interval;
        }
    }
    return count;
};
// @lc code=end

