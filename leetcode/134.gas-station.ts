/*
 * @lc app=leetcode id=134 lang=typescript
 *
 * [134] Gas Station
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sum = 0;
    let min = 1e4;
    let minIndex = 0;
    for (let i = 0; i < gas.length; i++) {
        const g = gas[i];
        const c = cost[i];
        sum += g - c;
        if (sum < min) {
            min = sum;
            minIndex = i;
        }
    }
    return sum < 0 ? -1 : (minIndex + 1) % gas.length;
};
// @lc code=end

