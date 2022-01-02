/*
 * @lc app=leetcode id=973 lang=typescript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
function kClosest(points: number[][], k: number): number[][] {
    return points.sort((lhs, rhs) => {
        return (lhs[0] * lhs[0] + lhs[1] * lhs[1]) - (rhs[0] * rhs[0] + rhs[1] * rhs[1]);
    }).slice(0, k);
};
// @lc code=end

