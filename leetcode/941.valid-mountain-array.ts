/*
 * @lc app=leetcode id=941 lang=typescript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) {
        return false;
    }
    let curr = 0;
    for (; curr < arr.length - 1; curr++) {
        if (arr[curr] >= arr[curr + 1]) {
            break;
        }
    }
    if (curr === 0 || curr === arr.length - 1) {
        return false;
    }
    for (; curr < arr.length - 1; curr++) {
        if (arr[curr] <= arr[curr + 1]) {
            break;
        }
    }
    return curr === arr.length - 1;
};
// @lc code=end

