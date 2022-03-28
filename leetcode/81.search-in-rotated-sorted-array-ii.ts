/*
 * @lc app=leetcode id=81 lang=typescript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
function search(nums: number[], target: number): boolean {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        if (nums[low] === target) {
            return true;
        }
        if (nums[low] === nums[high]) {
            low += 1;
            high -= 1;
        } else {
            const mid = Math.floor((high + low) / 2);
            if (nums[mid] === target) {
                return true;
            }
            if (
                (nums[low] < target && target < nums[mid]) ||
                (target < nums[mid] && nums[mid] < nums[low]) ||
                (nums[mid] < nums[low] && nums[low] < target)
            ) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return false;
};
// @lc code=end

