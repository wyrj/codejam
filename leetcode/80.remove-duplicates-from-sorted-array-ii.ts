/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) {
        return nums.length;
    }
    let currIndex = 2;
    let continueNumber = nums[0] === nums[1];
    for (let i = 2; i < nums.length; i++) {
        const skip = continueNumber && nums[i] === nums[currIndex - 1];
        if (!skip) {
            if (currIndex !== i) {
                nums[currIndex] = nums[i];
            }
            currIndex += 1;
            continueNumber = nums[currIndex - 1] === nums[currIndex - 2];
        }
    }
    return currIndex;
};
// @lc code=end

