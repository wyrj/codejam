/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  const max: Array<{ v: number, idx: number }> = [];
  function push(i: number): void {
    const n = nums[i];
    while (max.length > 0 && max[max.length - 1].v <= n) {
      max.pop();
    }
    max.push({ v: n, idx: i });
  }
  function shift(i: number): void {
    const n = nums[i];
    const head = max[0];
    if (n === head.v && i === head.idx) {
      max.shift();
    }
  }
  const ans: number[] = [];
  for (let i = 0; i < k; i++) {
    push(i);
  }
  ans.push(max[0].v);
  for (let i = k; i < nums.length; i++) {
    shift(i - k);
    push(i);
    ans.push(max[0].v);
  }
  return ans;
};
// @lc code=end
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
