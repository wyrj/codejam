/*
 * @lc app=leetcode id=1770 lang=typescript
 *
 * [1770] Maximum Score from Performing Multiplication Operations
 */

// @lc code=start
function maximumScore(nums: number[], multipliers: number[]): number {
  const map = new Map<string, number>();
  function recursive(index: number, leftIndex: number, rightIndex: number): number {
    if (index >= multipliers.length) {
      return 0;
    }
    const key = `${index},${leftIndex}`;
    let value = map.get(key);
    if (value !== undefined) {
      return value;
    }
    const n = multipliers[index];
    value = Math.max(
      n * nums[leftIndex] + recursive(index + 1, leftIndex + 1, rightIndex),
      n * nums[rightIndex] + recursive(index + 1, leftIndex, rightIndex - 1),
    );
    map.set(key, value);
    return value;
  }
  return recursive(0, 0, nums.length - 1);
};
// @lc code=end
