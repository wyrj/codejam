/*
 * @lc app=leetcode id=421 lang=typescript
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */

// @lc code=start
function findMaximumXOR(nums: number[]): number {
    let result = 0;
    let prefix = 0;
    for (let i = 30; i >= 0; i--) {
        prefix |= (1 << i);
        const prefixSet = new Set(nums.map(n => n & prefix));
        const target = result | (1 << i);
        if (prefixSet.size > (1 << (30 - i))) {
            result = target;
            continue;
        }
        for (let n of prefixSet) {
            if (prefixSet.has(n ^ target)) {
                result = target;
                break;
            }
        }
    }
    return result;
};
// @lc code=end

findMaximumXOR([3, 10, 5, 25, 2, 8]);