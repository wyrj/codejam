/*
 * @lc app=leetcode id=413 lang=typescript
 *
 * [413] Arithmetic Slices
 */

// @lc code=start
function numberOfArithmeticSlices(nums: number[]): number {
    if (nums.length < 3) {
        return 0;
    }
    const diff = nums[1] - nums[0];
    let last = 2;
    for (; last < nums.length; last++) {
        if (nums[last] - nums[last - 1] !== diff) {
            break;
        }
    }
    return (last - 2) * (last - 1) / 2 + (last === nums.length ? 0 : numberOfArithmeticSlices(nums.slice(last - 1)))
};
// @lc code=end

