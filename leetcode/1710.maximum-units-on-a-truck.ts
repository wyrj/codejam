/*
 * @lc app=leetcode id=1710 lang=typescript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((lhs, rhs) => (rhs[1] - lhs[1]));
  let ans = 0;
  let i = 0;
  while (truckSize > 0 && i < boxTypes.length) {
    const n = Math.min(truckSize, boxTypes[i][0]);
    ans += n * boxTypes[i][1];
    truckSize -= n;
    i += 1;
  }
  return ans;
};
// @lc code=end

