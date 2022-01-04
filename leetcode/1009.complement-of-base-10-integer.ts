/*
 * @lc app=leetcode id=1009 lang=typescript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
function bitwiseComplement(n: number): number {
    let k = n;
    while (k > 0) {
        let next = k & (k - 1);
        if (next === 0) {
            break;
        }
        k = next;
    }
    return k === 0 ? 1 : ((k - 1) ^ n) - k;
};
// @lc code=end

