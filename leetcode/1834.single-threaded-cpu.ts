/*
 * @lc app=leetcode id=1834 lang=typescript
 *
 * [1834] Single-Threaded CPU
 */

// @lc code=start
interface QElement {
  idx: number;
  start: number;
  time: number;
}
function getOrder(tasks: number[][]): number[] {
  const heap: QElement[] = [{ idx: -1, start: -1, time: -1 }];

  function half(n: number): number {
    return Math.floor(n / 2);
  }

  function swap(idx1: number, idx2: number): void {
    const temp = heap[idx1];
    heap[idx1] = heap[idx2];
    heap[idx2] = temp;
  }

  function higher(lhs: QElement, rhs: QElement): boolean {
    return lhs.time < rhs.time || (lhs.time === rhs.time && lhs.idx < rhs.idx);
  }

  function lookup(idx: number): void {
    while (idx > 1 && higher(heap[idx], heap[half(idx)])) {
      swap(idx, half(idx));
      idx = half(idx);
    }
  }

  function top(): QElement {
    const result = heap[1];
    const limit = heap.length - 1;
    let idx = 1;
    while (idx * 2 <= limit) {
      if (limit === idx * 2 || higher(heap[idx * 2], heap[idx * 2 + 1])) {
        heap[idx] = heap[idx * 2];
        idx = idx * 2;
      } else {
        heap[idx] = heap[idx * 2 + 1];
        idx = idx * 2 + 1;
      }
    }
    if (idx !== limit) {
      heap[idx] = heap[limit];
      lookup(idx);
    }
    heap.pop();

    return result;
  }

  function push(n: QElement): void {
    heap.push(n);
    lookup(heap.length - 1);
  }

  const result: number[] = [];
  const sorted = tasks.map(([start, time], idx) => ({ idx, start, time })).sort((lhs, rhs) => lhs.start - rhs.start);
  let time = 0;
  let i = 0;
  while (result.length < sorted.length) {
    if (heap.length > 1) {
      const t = top();
      result.push(t.idx);
      time += t.time;
    } else {
      time = sorted[i].start;
    }
    while (i < sorted.length && time >= sorted[i].start) {
      push(sorted[i]);
      i += 1;
    }
  }

  return result;
};
// @lc code=end

getOrder([[19,13],[16,9],[21,10],[32,25],[37,4],[49,24],[2,15],[38,41],[37,34],[33,6],[45,4],[18,18],[46,39],[12,24]])