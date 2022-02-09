/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
    return num >= 10 ? ((num % 9) || 9) : num;
};
// @lc code=end

