/*
 * @lc app=leetcode id=991 lang=typescript
 *
 * [991] Broken Calculator
 */

// @lc code=start
function brokenCalc(startValue: number, target: number): number {
    let step = 0;
    while (target > startValue) {
        step += 1;
        if (target % 2 === 0) {
            target /= 2;
        } else {
            target += 1;
        }
    }
    return step + (startValue - target);
};
// @lc code=end

brokenCalc(5, 8);