/*
 * @lc app=leetcode id=2022 lang=typescript
 *
 * [2022] Convert 1D Array Into 2D Array
 */

// @lc code=start
function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (original.length !== m * n) {
        return [];
    }
    return Array.from({ length: m }, (_, idx) => {
        return original.slice(idx * n, (idx + 1 ) * n);
    });
};
// @lc code=end

