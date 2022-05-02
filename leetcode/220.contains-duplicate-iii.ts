/*
 * @lc app=leetcode id=220 lang=typescript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  const min = -Math.pow(2, 31);
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      map.delete(Math.floor((nums[i - k - 1] - min) / (t + 1)));
    }
    const n = nums[i];
    const bucket = Math.floor((n - min) / (t + 1));
    if (
      map.has(bucket) ||
      (map.has(bucket - 1) && n - <number>map.get(bucket - 1) <= t) ||
      (map.has(bucket + 1) && <number>map.get(bucket + 1) - n <= t)
    ) {
      return true;
    }
    map.set(bucket, n);
  }
  return false;
};
// @lc code=end

