/*
 * @lc app=leetcode id=321 lang=typescript
 *
 * [321] Create Maximum Number
 */

// @lc code=start
function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
  function findMax(arr: number[], len: number): number[] {
    if (len === arr.length) {
      return arr.slice();
    }
    const result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];
      while (
        (result.length + arr.length - i) > len &&
        element > result[result.length - 1]
      ) {
        result.pop();
      }
      if (result.length < len) {
        result.push(element);
      }
    }
    return result;
  }
  function findSub(arr: number[]): number[][] {
    const sub: number[][] = [[]];
    const limit = Math.min(k, arr.length);
    for (let i = 1; i <= limit; i++) {
      sub.push(findMax(arr, i));
    }
    return sub;
  }
  function h(arr1: number[], index1: number, arr2: number[], index2: number): boolean {
    const maxLen = Math.min(arr1.length - index1, arr2.length - index2);
    for (let i = 0; i < maxLen; i++) {
      if (arr1[index1 + i] > arr2[index2 + i]) {
        return true;
      } else if (arr1[index1 + i] < arr2[index2 + i]) {
        return false;
      }
    }
    return maxLen + index1 !== arr1.length;
  }
  function mergeSub(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
      if (h(arr1, index1, arr2, index2)) {
        result.push(arr1[index1]);
        index1 += 1;
      } else {
        result.push(arr2[index2]);
        index2 += 1;
      }
    }
    result.push(...arr1.slice(index1));
    result.push(...arr2.slice(index2));
    return result;
  }
  function greaterThan(n1: number[], n2: number[]): boolean {
    if (n1.length > n2.length) {
      return true;
    }
    if (n1.length < n2.length) {
      return false;
    }
    for (let index = 0; index < n1.length; index++) {
      if (n1[index] > n2[index]) {
        return true;
      } else if (n1[index] < n2[index]) {
        return false;
      }
    }
    return false;
  }
  const sub1 = findSub(nums1);
  const sub2 = findSub(nums2);
  let ans = sub1[k];
  for (let i = 1; i <= k; i++) {
    if (sub1.length <= k - i || sub2.length <= i) {
      continue;
    }
    const candidate = mergeSub(sub1[k - i], sub2[i]);
    if (!ans || greaterThan(candidate, ans)) {
      ans = candidate;
    }
  }
  return ans;
};
// @lc code=end

maxNumber(
  [2,5,6,4,4,0],
  [7,3,8,0,6,5,7,6,2],
  15,
);