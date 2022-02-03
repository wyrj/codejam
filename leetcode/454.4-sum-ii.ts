/*
 * @lc app=leetcode id=454 lang=typescript
 *
 * [454] 4Sum II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map = new Map<number, Array<[number, number]>>();
    const n = nums1.length;
    for (let i3 = 0; i3 < n; i3++) {
        for (let i4 = 0; i4 < n; i4++) {
            const num = nums3[i3] + nums4[i4];
            if (!map.has(num)) {
                map.set(num, [[i3, i4]]);
            } else {
                map.get(num).push([i3, i4]);
            }
        }
    }
    let count = 0;
    for (let i1 = 0; i1 < n; i1++) {
        for (let i2 = 0; i2 < n; i2++) {
            const num = -(nums1[i1] + nums2[i2]);
            const index = map.get(num);
            if (!index) {
                continue;
            }
            count += index.length;
        }
    }
    return count;
};
// @lc code=end

