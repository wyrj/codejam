/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  let result = nums[0] + nums[1] + nums[2];
  nums.sort((lhs, rhs) => lhs - rhs);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        j += 1;
      } else {
        k -= 1;
      }
    }
  }
  return result;
};
// @lc code=end

