/*
 * @lc app=leetcode id=1695 lang=typescript
 *
 * [1695] Maximum Erasure Value
 */

// @lc code=start
function maximumUniqueSubarray(nums: number[]): number {
  const set = new Set<number>();
  let ans = 0;
  let localSum = 0;
  let index = 0;
  for (const n of nums) {
    while (set.has(n)) {
      localSum -= nums[index];
      set.delete(nums[index]);
      index += 1;
    }
    localSum += n;
    set.add(n);
    ans = Math.max(ans, localSum);
  }
  return ans;
};
// @lc code=end

