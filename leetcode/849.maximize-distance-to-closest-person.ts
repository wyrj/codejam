/*
 * @lc app=leetcode id=849 lang=typescript
 *
 * [849] Maximize Distance to Closest Person
 */

// @lc code=start
function maxDistToClosest(seats: number[]): number {
    const firstIndex = seats.findIndex((v) => v === 1);
    let lastIndex = firstIndex;
    let max = firstIndex;
    for (let i = firstIndex + 1; i < seats.length; i++) {
        if (seats[i] !== 1) {
            continue;
        }
        max = Math.max(Math.floor((i - lastIndex) / 2), max);
        lastIndex = i;
    }
    return Math.max(max, seats.length - lastIndex - 1);
};
// @lc code=end

