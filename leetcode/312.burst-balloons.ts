/*
 * @lc app=leetcode id=312 lang=typescript
 *
 * [312] Burst Balloons
 */

// @lc code=start
function maxCoins(nums: number[]): number {
    nums.unshift(1);
    nums.push(1);
    const table: number[][] = Array.from(nums, () => []);

    function recursive(lIndex: number, rIndex: number): number {
        if (table[lIndex][rIndex] !== undefined) {
            return table[lIndex][rIndex];
        }
        if (rIndex - lIndex < 2) {
            return table[lIndex][rIndex] = 0;
        } else if (rIndex - lIndex < 3) {
            return table[lIndex][rIndex] = nums[lIndex] * nums[lIndex + 1] * nums[lIndex + 2];
        } else {
            let max = 0;
            for (let i = lIndex + 1; i <= rIndex - 1; i++) {
                max = Math.max(
                    max,
                    recursive(lIndex, i)
                    + recursive(i, rIndex)
                    + nums[lIndex] * nums[rIndex] * nums[i]
                );
            }
            return table[lIndex][rIndex] = max;
        }
    }

    return recursive(0, nums.length - 1);
};
// @lc code=end

console.log(maxCoins([3,1,5,8]));