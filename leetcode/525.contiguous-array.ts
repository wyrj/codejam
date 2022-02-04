/*
 * @lc app=leetcode id=525 lang=typescript
 *
 * [525] Contiguous Array
 */

// @lc code=start
function findMaxLength(nums: number[]): number {
    let map = new Map<number, number>();
    map.set(0, -1);
    let max = 0;
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
        n += (nums[i] === 0 ? -1 : 1);
        if (map.has(n)) {
            max = Math.max(max, i - map.get(n));
        } else {
            map.set(n, i);
        }
    }
    return max;
};
// @lc code=end

