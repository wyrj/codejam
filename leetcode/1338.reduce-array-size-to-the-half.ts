/*
 * @lc app=leetcode id=1338 lang=typescript
 *
 * [1338] Reduce Array Size to The Half
 */

// @lc code=start
function minSetSize(arr: number[]): number {
  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const sorted = Array.from(map.entries()).sort((lhs, rhs) => rhs[1] - lhs[1]);
  let sum = 0;
  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i][1];
    if (sum >= arr.length / 2) {
      return i + 1;
    }
  }
  return sorted.length;
};
// @lc code=end

