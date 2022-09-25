/*
 * @lc app=leetcode id=622 lang=typescript
 *
 * [622] Design Circular Queue
 */

// @lc code=start
class MyCircularQueue {
  private maxLen: number;
  private q: number[];

  constructor(k: number) {
    this.maxLen = k;
    this.q = [];
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.q.push(value);
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.q.shift();
    return true;
  }

  Front(): number {
    return this.q[0] ?? -1;
  }

  Rear(): number {
    return this.q[this.q.length - 1] ?? -1;
  }

  isEmpty(): boolean {
    return this.q.length === 0;
  }

  isFull(): boolean {
    return this.q.length === this.maxLen;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

