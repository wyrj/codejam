/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let count = 0;
    let now;
    for (const n of nums) {
        if (count === 0) {
            count += 1;
            now = n;
        } else if (n === now) {
            count += 1;
        } else {
            count -= 1;
        }
    }
    return now;
};
// @lc code=end

