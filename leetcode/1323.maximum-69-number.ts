/*
 * @lc app=leetcode id=1323 lang=typescript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
function maximum69Number (num: number): number {
    const str = `${num}`;
    return parseInt(str.replace('6', '9'), 10);
};
// @lc code=end
