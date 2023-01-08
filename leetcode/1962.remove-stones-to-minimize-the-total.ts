/*
 * @lc app=leetcode id=1962 lang=typescript
 *
 * [1962] Remove Stones to Minimize the Total
 */

// @lc code=start
function minStoneSum(piles: number[], k: number): number {
  const maxHeap = [0];

  function half(n: number): number {
    return Math.floor(n / 2);
  }

  function swap(idx1: number, idx2: number): void {
    const temp = maxHeap[idx1];
    maxHeap[idx1] = maxHeap[idx2];
    maxHeap[idx2] = temp;
  }

  function lookup(idx: number): void {
    while (idx > 1 && maxHeap[idx] > maxHeap[half(idx)]) {
      swap(idx, half(idx));
      idx = half(idx);
    }
  }

  function top(): number {
    const result = maxHeap[1];
    const limit = maxHeap.length - 1;
    let idx = 1;
    while (idx * 2 <= limit) {
      if (limit === idx * 2 || maxHeap[idx * 2] >= maxHeap[idx * 2 + 1]) {
        maxHeap[idx] = maxHeap[idx * 2];
        idx = idx * 2;
      } else {
        maxHeap[idx] = maxHeap[idx * 2 + 1];
        idx = idx * 2 + 1;
      }
    }
    if (idx !== limit) {
      maxHeap[idx] = maxHeap[limit];
      lookup(idx);
    }
    maxHeap.pop();

    return result;
  }

  function push(n: number): void {
    maxHeap.push(n);
    lookup(maxHeap.length - 1);
  }

  piles.forEach(push);
  while (k--) {
    const t = top();
    push(t - half(t));
  }
  return maxHeap.reduce((s, v) => s + v, 0);
};
// @lc code=end

minStoneSum([5, 4, 9], 2);