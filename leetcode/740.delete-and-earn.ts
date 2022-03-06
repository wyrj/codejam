/*
 * @lc app=leetcode id=740 lang=typescript
 *
 * [740] Delete and Earn
 */

// @lc code=start
function deleteAndEarn(nums: number[]): number {
    const count = new Array(10e4 + 1).fill(0);
    for (const n of nums) {
        count[n] += 1;
    }
    const table = new Array(10e4 + 1).fill(0);
    table[1] = count[1];
    for (let i = 2; i <= 10e4; i++) {
        table[i] = Math.max(table[i - 1], table[i - 2] + i * count[i]);
    }
    return table[10e4];
};
// @lc code=end

