/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const value = nums[mid];
        if (value === target) {
            return mid;
        } else if (value > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};
// @lc code=end

