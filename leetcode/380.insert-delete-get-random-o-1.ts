/*
 * @lc app=leetcode id=380 lang=typescript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
class RandomizedSet {
  private s: Set<number>;
  private q: number[];

  constructor() {
    this.s = new Set();
    this.q = [];
  }

  insert(val: number): boolean {
    if (this.s.has(val)) {
      return false;
    }
    this.s.add(val);
    this.q.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.s.has(val)) {
      return false;
    }
    this.s.delete(val);
    this.q = Array.from(this.s);
    return true;
  }

  getRandom(): number {
    return this.q[Math.floor(Math.random() * this.q.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

