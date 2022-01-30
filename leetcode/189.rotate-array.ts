/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const swap = (i: number, j: number): void => {
        const temp = nums[i];
        nums[i] = nums[j] ;
        nums[j] = temp;
    }
    const r = (pre: number, post: number): void => {
        if (pre === 0) {
            return;
        }
        let start = nums.length - post - pre;
        while (post >= pre) {
            for (let i = 0; i < pre; i++) {
                swap(start + i, start + i + pre);
            }
            start += pre;
            post -= pre;
        }
        if (post === 0) {
            return;
        }
        for (let i = 0; i < post; i++) {
            swap(start + i, start + i + pre);
        }
        r(pre - post, post);
    }
    k = k % nums.length;
    r(nums.length - k, k);
};
// @lc code=end

