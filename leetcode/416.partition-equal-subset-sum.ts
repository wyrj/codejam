/*
 * @lc app=leetcode id=416 lang=typescript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
    let sum = 0;
    let max = 0;
    for (const v of nums) {
        sum += v;
        max = Math.max(v, max);
    }
    const target = sum / 2;
    if (max > target || sum % 2 === 1) {
        return false;
    }
    const table = new Array(target + 1).fill(false);
    table[0] = true;
    for (const v of nums) {
        for (let i = target - v; i >= 0; i--) {
            table[i + v] |= table[i];
        }
    }
    return table[target];
};
// @lc code=end

