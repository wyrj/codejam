/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  function swap(idx1: number, idx2: number): void {
    const temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
  }
  function reverse(start: number, end: number): void {
    while (start < end) {
      swap(start, end);
      start += 1;
      end -= 1;
    }
  }

  let firstDownIndex = nums.length - 1;
  for (; firstDownIndex >= 0; firstDownIndex--) {
    if (nums[firstDownIndex] < nums[firstDownIndex + 1]) {
      break;
    }
  }
  if (firstDownIndex === -1) {
    reverse(0, nums.length - 1)
    return;
  }
  for (let i = nums.length - 1; i > firstDownIndex; i--) {
    if (nums[i] > nums[firstDownIndex]) {
      swap(i, firstDownIndex);
      reverse(firstDownIndex + 1, nums.length - 1);
      break;
    }
  }
};
// @lc code=end
