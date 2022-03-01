/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) {
        return [];
    }
    let curr: [number, number] = [nums[0], nums[0]];
    const list: Array<[number, number]> = [curr];
    const iter = nums[Symbol.iterator]();
    iter.next();
    for (const n of iter) {
        if (n === curr[1] + 1) {
            curr[1] = n;
        } else {
            curr = [n, n];
            list.push(curr);
        }
    }
    return list.map(([start, end]) => start === end ? `${start}` : `${start}->${end}`);
};
// @lc code=end

