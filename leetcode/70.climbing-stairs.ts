/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    const ans = new Array(n);
    ans[0] = 1;
    ans[1] = 2;
    for (let i = 2; i < n; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }
    return ans[n - 1];
};
// @lc code=end

