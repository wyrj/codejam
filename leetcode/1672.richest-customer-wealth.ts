/*
 * @lc app=leetcode id=1672 lang=typescript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
function maximumWealth(accounts: number[][]): number {
    return Math.max(...accounts.map(arr => arr.reduce((s, v) => s + v, 0)));
};
// @lc code=end

