/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length;
    let n = matrix[0].length;
    let low = 0;
    let high = m * n - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const value = matrix[Math.floor(mid / n)][mid % n];
        if (value === target) {
            return true;
        } else if (value < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
};
// @lc code=end

