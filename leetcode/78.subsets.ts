/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    if (nums.length === 0) {
        return [[]];
    }
    const n = nums[0];
    const sub = subsets(nums.slice(1));
    for (const subset of sub.slice()) {
        sub.push([n, ...subset]);
    }
    return sub;
};
// @lc code=end

