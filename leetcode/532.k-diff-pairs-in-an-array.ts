/*
 * @lc app=leetcode id=532 lang=typescript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
function findPairs(nums: number[], k: number): number {
    if (k === 0) {
        const visit = new Set<number>();
        const check = new Set<number>();
        for (const n of nums) {
            if (check.has(n)) {
                continue;
            } else if (visit.has(n)) {
                check.add(n);
            } else {
                visit.add(n);
            }
        }
        return check.size;
    }
    const s = new Set(nums);
    let ans = 0;
    for (const n of s) {
        if (s.has(n + k)) {
            ans += 1;
        }
    }
    return ans;
};
// @lc code=end

