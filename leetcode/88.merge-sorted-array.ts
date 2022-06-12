/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m - 1; i >= 0; i--) {
    nums1[i + n] = nums1[i];
  }
  let i = 0;
  let mi = n;
  let ni = 0;
  while (mi < m + n && ni < n) {
    if (nums1[mi] < nums2[ni]) {
      nums1[i] = nums1[mi];
      mi += 1;
    } else {
      nums1[i] = nums2[ni];
      ni += 1;
    }
    i += 1;
  }
  while (ni < n) {
    nums1[i] = nums2[ni];
    ni += 1;
    i += 1;
  }
};
// @lc code=end

