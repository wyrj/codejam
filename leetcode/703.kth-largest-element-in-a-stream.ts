/*
 * @lc app=leetcode id=703 lang=typescript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
class KthLargest {
  private n: number[];

  constructor(k: number, nums: number[]) {
    let n = nums.sort((lhs, rhs) => lhs - rhs);
    if (n.length < k) {
      n.unshift(-100000);
    } else {
      n = n.slice(nums.length - k);
    }
    this.n = n;
  }

  add(val: number): number {
    if (val > this.n[0]) {
      const index = _.sortedIndex(this.n, val);
      this.n.splice(index, 0, val);
      this.n.shift();
    }
    return this.n[0];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

