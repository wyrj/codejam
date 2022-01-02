/*
 * @lc app=leetcode id=1200 lang=typescript
 *
 * [1200] Minimum Absolute Difference
 */

// @lc code=start
function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((l, r) => l - r);
    let min = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        min = Math.min(arr[i + 1] - arr[i], min);
    }
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] === min) {
            result.push([arr[i], arr[i + 1]]);
        }
    }
    return result;
};
// @lc code=end

