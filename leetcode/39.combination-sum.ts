/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    const table: number[][][] = Array.from({ length: target + 1 }, _ => []);
    for (const candidate of candidates) {
        table[candidate]?.push([candidate]);
        for (let i = candidate + 1; i <= target; i++) {
            for (const t of table[i - candidate]) {
                table[i].push([...t, candidate]);
            }
        }
    }
    return table[target];
};
// @lc code=end

