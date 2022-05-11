/*
 * @lc app=leetcode id=295 lang=typescript
 *
 * [295] Find Median from Data Stream
 */

import _ from 'lodash';
// @lc code=start
class MedianFinder {
  private arr: number[];

  constructor() {
    this.arr = [];
  }

  addNum(num: number): void {
    const index = _.sortedIndex(this.arr, num);
    this.arr.splice(index, 0, num);
  }

  findMedian(): number {
    const len = this.arr.length;
    return len % 2 === 1 ? this.arr[(len - 1) / 2] : (this.arr[len / 2] + this.arr[(len / 2) - 1]) / 2;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

