/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const count = new Array(21).fill(0);
  for (const n of nums) {
    count[n + 10] += 1;
  }
  const cache = new Map<string, number[][]>();
  function r(arr: number[], sum: number): number[][] {
    if (sum === 1) {
      return [[arr.findIndex(v => v !== 0) - 10]];
    }
    const key = arr.join(',');
    let result = cache.get(key);
    if (!result) {
      result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
          continue;
        }
        arr[i] -= 1;
        for (const a of r(arr, sum - 1)) {
          result.push([i - 10, ...a]);
        }
        arr[i] += 1;
      }
      cache.set(key, result);
    }
    return result;
  }
  return r(count, nums.length);
};
// @lc code=end

