/*
 * @lc app=leetcode id=1446 lang=typescript
 *
 * [1446] Consecutive Characters
 */

// @lc code=start
function maxPower(s: string): number {
    if (s.length === 0) {
        return 0;
    }
    let max = 1;
    let now = 1;
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i - 1)) {
            now += 1;
            max = Math.max(now, max);
        } else {
            now = 1;
        }
    }
    return max;
};
// @lc code=end

