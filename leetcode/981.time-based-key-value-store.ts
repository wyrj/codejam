/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */
import _ from 'lodash';

// @lc code=start
class TimeMap {
  private m: Map<string, Array<{t: number, s: string}>>;

  constructor() {
    this.m = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    const arr = this.m.get(key) ?? [];
    arr.push({ t: timestamp, s: value });
    this.m.set(key, arr);
  }

  get(key: string, timestamp: number): string {
    const arr = this.m.get(key);
    if (!arr) {
      return '';
    }
    const index = _.sortedLastIndexBy(arr, { t: timestamp, s: '' }, 't');
    return index === 0 ? '' : arr[index - 1].s;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

