/*
 * @lc app=leetcode id=1010 lang=typescript
 *
 * [1010] Pairs of Songs With Total Durations Divisible by 60
 */

// @lc code=start
function numPairsDivisibleBy60(time: number[]): number {
    const mod: number[] = new Array(60).fill(0);
    for (const t of time) {
        mod[t % 60] += 1;
    }
    let ans = (mod[0] > 1) ? (mod[0] * (mod[0] - 1) / 2) : 0;
    for (let i = 1; i < 30; i++) {
        ans += mod[i] * mod[60 - i];
    }
    if (mod[30] > 1) {
        ans += (mod[30] * (mod[30] - 1) / 2);
    }
    return ans;
};
// @lc code=end

