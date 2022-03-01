/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
    const result = [0];
    let base = 0;
    let end = 1;
    for (let i = 1; i <= n; i++) {
        if (i === end) {
            result.push(1);
            base = i;
            end = i * 2;
        } else {
            result.push(result[i - base] + 1);
        }
    }
    return result;
};
// @lc code=end

