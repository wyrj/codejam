/*
 * @lc app=leetcode id=327 lang=typescript
 *
 * [327] Count of Range Sum
 */

// @lc code=start
interface RecursiveResult {
  preSumIndex: number[],
  sumIndex: number[],
  count: number,
}
function countRangeSum(nums: number[], lower: number, upper: number): number {
  const sums: number[] = [0];
  let s = 0;
  for (const n of nums) {
    s += n;
    sums.push(s);
  }
  function mergeIndex(lhs: number[], rhs: number[]): number[] {
    const index: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < lhs.length && rightIndex < rhs.length) {
      if (sums[lhs[leftIndex]] < sums[rhs[rightIndex]]) {
        index.push(lhs[leftIndex]);
        leftIndex += 1;
      } else {
        index.push(rhs[rightIndex]);
        rightIndex += 1;
      }
    }
    index.push(...lhs.slice(leftIndex));
    index.push(...rhs.slice(rightIndex));
    return index;
  }
  function r(start: number, end: number): RecursiveResult {
    if (start === end) {
      const sum = sums[end + 1] - sums[start];
      return {
        preSumIndex: [start],
        sumIndex: [start + 1],
        count: lower <= sum && sum <= upper ? 1 : 0,
      };
    }
    const mid = start + Math.floor((end - start) / 2);
    const left = r(start, mid);
    const right = r(mid + 1, end);
    let count = left.count + right.count;
    let lowerIndex = right.sumIndex.length - 1;
    let upperIndex = right.sumIndex.length - 1;
    for (let i = left.preSumIndex.length - 1; i >= 0; i--) {
      while (
        upperIndex >= 0 &&
        (sums[right.sumIndex[upperIndex]] - sums[left.preSumIndex[i]]) > upper
      ) {
        upperIndex -= 1;
      }
      while (
        lowerIndex >= 0 &&
        (sums[right.sumIndex[lowerIndex]] - sums[left.preSumIndex[i]]) >= lower
      ) {
        lowerIndex -= 1;
      }
      count += Math.max(0, upperIndex - lowerIndex);
    }

    return {
      preSumIndex: mergeIndex(left.preSumIndex, right.preSumIndex),
      sumIndex: mergeIndex(left.sumIndex, right.sumIndex),
      count,
    };
  }
  return r(0, nums.length - 1).count;
};
// @lc code=end

countRangeSum(
  [0,-1,1,2,-3,-3],
  -3,
  1,
);