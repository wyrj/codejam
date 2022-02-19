/*
 * @lc app=leetcode id=1675 lang=typescript
 *
 * [1675] Minimize Deviation in Array
 */
import _ from 'lodash';

// @lc code=start
function minimumDeviation(nums: number[]): number {
    const array = nums.map(v => v % 2 === 0 ? v : v * 2).sort((lhs, rhs) => lhs - rhs);
    let minDiff = _.last(array) - array[0];
    while(array.length > 0 && _.last(array) % 2 === 0) {
        const value = array.pop() / 2;
        const index = _.sortedLastIndex(array, value);
        array.splice(index, 0, value);
        const diff = _.last(array) - array[0];
        minDiff = Math.min(minDiff, diff);
    }
    return minDiff;
};
// @lc code=end
minimumDeviation([1,2,3,4]);
