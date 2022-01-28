/*
 * @lc app=leetcode id=137 lang=typescript
 *
 * [137] Single Number II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    const trinary = new Array(32).fill(0);
    for (const num of nums) {
        for (let i = 0; i < 32; i++) {
            if ((num & (1 << i)) !== 0) {
                trinary[i] = (trinary[i] + 1) % 3;
            }
        }
    }
    let ans = 0;
    for (let i = 30; i >= 0; i--) {
        ans = ans * 2 + trinary[i];
    }
    if (trinary[31] === 1) {
        ans = -((1 << 30) * 2 - ans);
    }
    return ans;
};
// @lc code=end

console.log(singleNumber([-4]))
