/*
 * @lc app=leetcode id=1337 lang=typescript
 *
 * [1337] The K Weakest Rows in a Matrix
 */
import _ from 'lodash';

// @lc code=start
function kWeakestRows(mat: number[][], k: number): number[] {
    const soldierCount = mat.map(row => {
        return row.length - _.sortedIndex(row.reverse(), 1);
    });
    return Array.from(mat, (_, idx) => idx).sort((lhs, rhs) => {
        return (soldierCount[lhs] - soldierCount[rhs]) || (lhs - rhs);
    }).slice(0, k);
};
// @lc code=end

