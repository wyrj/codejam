/*
 * @lc app=leetcode id=1029 lang=typescript
 *
 * [1029] Two City Scheduling
 */

// @lc code=start
function twoCitySchedCost(costs: number[][]): number {
    const n = costs.length / 2;
    costs.sort((lhs, rhs) => {
        return Math.abs(rhs[0] - rhs[1]) - Math.abs(lhs[0] - lhs[1]);
    });
    let sum = 0;
    let aCount = 0;
    let bCount = 0;
    for (const [aCost, bCost] of costs) {
        if (aCount === n) {
            sum += bCost;
            bCount += 1;
        } else if (bCount === n) {
            sum += aCost;
            aCount += 1;
        } else if (aCost < bCost) {
            sum += aCost;
            aCount += 1;
        } else {
            sum += bCost;
            bCount += 1;
        }
    }
    return sum;
};
// @lc code=end

