/*
 * @lc app=leetcode id=1658 lang=typescript
 *
 * [1658] Minimum Operations to Reduce X to Zero
 */

// @lc code=start
function minOperations(nums: number[], x: number): number {
  const map = new Map<number, number>();
  let rightSum = 0;
  let rightIndex = nums.length;
  while (rightSum <= x && rightIndex >= 0) {
    map.set(rightSum, nums.length - rightIndex);
    rightIndex -= 1;
    rightSum += nums[rightIndex];
  }
  let leftSum = 0;
  let leftIndex = 0;
  let ans = nums.length + 1;
  while (leftSum <= x && leftIndex < nums.length) {
    const rightCount = map.get(x - leftSum);
    if (rightCount != undefined) {
      ans = Math.min(ans, leftIndex + rightCount);
    }
    leftSum += nums[leftIndex];
    leftIndex += 1;
  }
  return ans === nums.length + 1 ? -1 : ans;
};
// @lc code=end

