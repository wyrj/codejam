/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
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

  sumRange(left: number, right: number): number {
    return this.sum[right] - (left > 0 ? this.sum[left - 1] : 0);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

