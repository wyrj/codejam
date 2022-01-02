/*
 * @lc app=leetcode id=1217 lang=typescript
 *
 * [1217] Minimum Cost to Move Chips to The Same Position
 */

// @lc code=start
function minCostToMoveChips(position: number[]): number {
    const c = [0, 0];
    for (const v of position) {
        c[v % 2] += 1;
    }
    return Math.min(c[0], c[1]);
};
// @lc code=end

