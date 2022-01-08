/*
 * @lc app=leetcode id=1463 lang=typescript
 *
 * [1463] Cherry Pickup II
 */

// @lc code=start
function cherryPickup(grid: number[][]): number {
    const table: number[][][] = [];
    const rowCount = grid.length;
    const colCount = grid[0].length;
    table[0] = Array.from({ length: colCount }, () => new Array(colCount).fill(0));
    table[0][0][colCount - 1] = grid[0][0] + grid[0][colCount - 1];
    for (let r = 1; r < rowCount; r++) {
        table.push([]);
        for (let c1 = 0; c1 < colCount; c1++) {
            table[r].push([]);
            for (let c2 = 0; c2 < colCount; c2++) {
                let max = 0;
                const left1 = Math.max(c1 - 1, 0);
                const right1 = Math.min(c1 + 1, colCount - 1);
                const left2 = Math.max(c2 - 1, 0);
                const right2 = Math.min(c2 + 1, colCount - 1);
                for (let previousC1 = left1; previousC1 <= right1; previousC1++) {
                    for (let previousC2 = left2; previousC2 <= right2; previousC2++) {
                        max = Math.max(max, table[r - 1][previousC1][previousC2]);
                    }
                }
                const value1 = c1 > r ? 0 : grid[r][c1];
                const value2 = c2 < (colCount - 1 - r) || c1 === c2 ? 0 : grid[r][c2];
                table[r][c1][c2] = max + value1 + value2;
            }
        }
    }
    return Math.max(...table[rowCount - 1].map(r => Math.max(...r)));
};
// @lc code=end

