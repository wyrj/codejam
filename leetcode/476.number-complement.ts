/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
    let n = num;
    while (n > 0) {
        let next = n & (n - 1);
        if (next === 0) {
            break;
        }
        n = next;
    }
    return ((n - 1) ^ num) - n;
};
// @lc code=end
