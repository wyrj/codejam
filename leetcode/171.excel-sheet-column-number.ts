/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
    const base = 'A'.charCodeAt(0) - 1;
    let ans = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        ans = ans * 26 + (columnTitle.charCodeAt(i) - base);
    }
    return ans;
};
// @lc code=end

