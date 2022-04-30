/*
 * @lc app=leetcode id=284 lang=typescript
 *
 * [284] Peeking Iterator
 */

interface Iterator {
  hasNext(): boolean;
  next(): number;
}
// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
  private h: boolean;
  private n: number;
  private iter: Iterator;

  constructor(iterator: Iterator) {
    this.iter = iterator;
    this.h = this.iter.hasNext();
    this.n = this.iter.next();
  }

  peek(): number {
    return this.h ? this.n : NaN;
  }

  next(): number {
    if (!this.h) {
      return NaN;
    }
    const v = this.n;
    this.h = this.iter.hasNext();
    this.n = this.iter.next();
    return v;
  }

  hasNext(): boolean {
    return this.h;
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end

