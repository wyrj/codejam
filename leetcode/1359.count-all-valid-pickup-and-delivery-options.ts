/*
 * @lc app=leetcode id=1359 lang=typescript
 *
 * [1359] Count All Valid Pickup and Delivery Options
 */

// @lc code=start
function countOrders(n: number): number {
    const ans = new Array(n + 1).fill(1);
    for (let i = 2; i <= n; i++) {
        ans[i] = (ans[i - 1] * (i * (i * 2 - 1))) % (1e9 + 7);
    }
    return ans[n];
};
// @lc code=end

