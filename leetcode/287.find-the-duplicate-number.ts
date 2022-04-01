/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
    const s = new Set<number>();
    for (const n of nums) {
        if (s.has(n)) {
            return n;
        }
        s.add(n);
    }
    return -1;
};
// @lc code=end

