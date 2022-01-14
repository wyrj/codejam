/*
 * @lc app=leetcode id=452 lang=typescript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
function findMinArrowShots(points: number[][]): number {
    points.sort((lhs, rhs) => (lhs[0] - rhs[0] || lhs[1] - rhs[1]));
    let count = 0;
    let min: number | null = null;
    for (const [start, end] of points) {
        if (min !== null && start > min) {
            count += 1;
            min = null;
        }
        min = min === null ? end : Math.min(min, end);
    }
    if (min !== null) {
        count += 1;
    }
    return count;
};
// @lc code=end

