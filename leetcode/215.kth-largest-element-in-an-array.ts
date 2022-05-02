/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  if (k === 1) {
    return Math.max(...nums);
  }
  if (k === nums.length) {
    return Math.min(...nums);
  }
  const pivot = nums[0];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] >= pivot) {
      left += 1;
    } else if (nums[right] < pivot) {
      right -= 1;
    } else {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left += 1;
      right -= 1;
    }
  }
  if (right + 1 === k) {
    return pivot;
  }
  if (right !== 0) {
    nums[0] = nums[right];
    nums[right] = pivot;
  }
  if (left === nums.length) {
    return findKthLargest(nums.slice(0, left - 1), k);
  } else if (left > k) {
    return findKthLargest(nums.slice(0, left), k);
  }
  return findKthLargest(nums.slice(left), k - left);
};
// @lc code=end
findKthLargest([-1, 2, 0], 2);
