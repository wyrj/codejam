/*
 * @lc app=leetcode id=307 lang=typescript
 *
 * [307] Range Sum Query - Mutable
 */

// @lc code=start
class NumArray {
  private sum: number[];

  constructor(nums: number[]) {
    this.sum = [];
    let s = 0;
    for (const n of nums) {
      s += n;
      this.sum.push(s);
    }
  }

  update(index: number, val: number): void {
    const v = this.sumRange(index, index);
    const diff = val - v;
    for (let i = index; i < this.sum.length; i++) {
      this.sum[i] += diff;
    }
  }

  sumRange(left: number, right: number): number {
    return this.sum[right] - (left > 0 ? this.sum[left - 1] : 0);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

