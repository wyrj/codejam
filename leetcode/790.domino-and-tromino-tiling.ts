/*
 * @lc app=leetcode id=790 lang=typescript
 *
 * [790] Domino and Tromino Tiling
 */

// @lc code=start
function numTilings(n: number): number {
    const table: number[] = [1, 2];
    let doubleTime = 1;
    for (let i = 2; i < n; i++) {
        table[i] = (table[i - 1] + table[i - 2] + 2 * doubleTime) % (1e9 + 7);
        doubleTime = (doubleTime + table[i - 2]) % (1e9 + 7);
    }
    return table[n - 1] ?? 0;
};
// @lc code=end

