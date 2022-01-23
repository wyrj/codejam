/*
 * @lc app=leetcode id=1291 lang=typescript
 *
 * [1291] Sequential Digits
 */

// @lc code=start
function sequentialDigits(low: number, high: number): number[] {
    const lowStr = `${low}`;
    const highStr = `${high}`;
    const lowLen = lowStr.length;
    const highLen = highStr.length;

    const ans: number[] = [];
    let base = 0;
    for (let len = 1; len < lowLen; len++) {
        base += parseInt('1'.repeat(len), 10);
    }
    for (let len = lowLen; len <= highLen; len++) {
        const step = parseInt('1'.repeat(len), 10);
        base +=  step;
        let now = base;
        for (let digit = 0; digit < 10 - len; digit++) {
            if (low <= now && now <= high) {
                ans.push(now);
            }
            now += step;
        }
    }

    return ans;
};
// @lc code=end

