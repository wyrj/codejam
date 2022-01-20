/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
    let low = 1;
    let high = Math.max(...piles);
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (piles.reduce((s, v) => s + Math.ceil(v / mid), 0) <= h) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return high;
};
// @lc code=end
minEatingSpeed([30, 11, 23, 4, 20], 5);