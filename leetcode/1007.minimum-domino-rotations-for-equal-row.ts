/*
 * @lc app=leetcode id=1007 lang=typescript
 *
 * [1007] Minimum Domino Rotations For Equal Row
 */

// @lc code=start
function minDominoRotations(tops: number[], bottoms: number[]): number {
    let candidate = (1 << 6) - 1;
    for (let i = 0; i < tops.length; i++) {
        candidate &= (1 << (tops[i] - 1) | 1 << (bottoms[i] - 1));
    }
    if (candidate === 0) {
        return -1;
    }
    while ((candidate & (candidate - 1)) !== 0) {
        candidate &= candidate - 1;
    }
    const target = Math.log2(candidate) + 1;
    let topCount = 0;
    let bottomCount = 0;
    for (let i = 0; i < tops.length; i++) {
        if (tops[i] !== target) {
            topCount += 1;
        }
        if (bottoms[i] !== target) {
            bottomCount += 1;
        }
    }
    return Math.min(topCount, bottomCount);
};
// @lc code=end

minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]);