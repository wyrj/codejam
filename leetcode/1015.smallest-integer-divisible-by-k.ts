/*
 * @lc app=leetcode id=1015 lang=typescript
 *
 * [1015] Smallest Integer Divisible by K
 */

// @lc code=start
function smallestRepunitDivByK(k: number): number {
    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }
    const set = new Set<number>();
    let now = k;
    let len = 0;
    while (!set.has(now)) {
        set.add(now);
        while (now % 10 === 1) {
            now = Math.floor(now / 10);
            len += 1;
        }
        if (now === 0) {
            return len;
        }
        now += k;
    }
    return -1;
};
// @lc code=end

