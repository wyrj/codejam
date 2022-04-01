/*
 * @lc app=leetcode id=410 lang=typescript
 *
 * [410] Split Array Largest Sum
 */
// @lc code=start
function splitArray(nums: number[], m: number): number {
    let sum = 0;
    let max = 0;
    for (const n of nums) {
        sum += n;
        max = Math.max(max, n);
    }
    function test(v: number): boolean {
        let count = 1;
        let s = 0;
        for (const n of nums) {
            s += n;
            if (s > v) {
                s = n;
                count += 1;
                if (count > m) {
                    return false;
                }
            }
        }
        return true;
    }
    let low = max;
    let high = sum;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (test(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return high;
};
// @lc code=end
splitArray([7, 2, 5, 10, 8], 2);