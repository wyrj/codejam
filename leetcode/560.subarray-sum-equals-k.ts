/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                ans += 1;
            }
        }
    }
    return ans;
};
// @lc code=end

