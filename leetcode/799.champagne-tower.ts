/*
 * @lc app=leetcode id=799 lang=typescript
 *
 * [799] Champagne Tower
 */

// @lc code=start
function champagneTower(poured: number, query_row: number, query_glass: number): number {
    if (query_glass > query_row / 2) {
        return champagneTower(poured, query_row, query_row - query_glass);
    }
    const table: number[][] = [[poured]];
    for (let i = 1; i <= query_row; i++) {
        table[i] = [];
        const jLen = Math.min(i, query_glass);
        for (let j = 0; j <= jLen; j++) {
            let result = 0;
            if (j > 0 && table[i - 1][j - 1] > 1) {
                result += (table[i - 1][j - 1] - 1) / 2;
            }
            if (j < i && table[i - 1][j] > 1) {
                result += (table[i - 1][j] - 1) / 2;
            }
            table[i][j] = result;
        }
    }
    return Math.min(table[query_row][query_glass], 1);
};
// @lc code=end

