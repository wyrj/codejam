/*
 * @lc app=leetcode id=1572 lang=typescript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
function diagonalSum(mat: number[][]): number {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        const j = mat.length - i - 1;
        sum += mat[i][i] + mat[i][j];
    }
    if (mat.length % 2 === 1) {
        const center = Math.floor((mat.length / 2));
        sum -= mat[center][center];
    }
    return sum;
};
// @lc code=end

