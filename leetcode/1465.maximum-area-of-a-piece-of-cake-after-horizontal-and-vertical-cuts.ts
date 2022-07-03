/*
 * @lc app=leetcode id=1465 lang=typescript
 *
 * [1465] Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 */

// @lc code=start
function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): number {
  function getMax(arr: number[]): number {
    arr.sort((lhs, rhs) => lhs - rhs);
    return Math.max(...arr.map((val, idx) => {
      return val - (arr[idx - 1] ?? 0);
    })) % (1e9 + 7);
  }
  horizontalCuts.push(h);
  verticalCuts.push(w);

  let ans = 0;
  let width = getMax(verticalCuts);
  let height = getMax(horizontalCuts);
  while (width > 0) {
    const current = Math.min(width, 1e5);
    ans = (ans + height * current) % (1e9 + 7);
    width -= current;
  }
  return ans;
};
// @lc code=end

