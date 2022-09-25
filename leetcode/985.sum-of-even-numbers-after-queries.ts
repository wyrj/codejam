/*
 * @lc app=leetcode id=985 lang=typescript
 *
 * [985] Sum of Even Numbers After Queries
 */

// @lc code=start
function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
  let even = nums.reduce((s, v) => s + (v % 2 === 0 ? v : 0), 0);
  const result: number[] = [];
  for (const [val ,index] of queries) {
    if (nums[index] % 2 === 0) {
      if (val % 2 === 0) {
        even += val;
      } else {
        even -= nums[index];
      }
    } else {
      if (val % 2 !== 0) {
        even += nums[index] + val;
      }
    }
    result.push(even);
    nums[index] += val;
  }
  return result;
};
// @lc code=end

