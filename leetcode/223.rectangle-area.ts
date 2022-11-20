/*
 * @lc app=leetcode id=223 lang=typescript
 *
 * [223] Rectangle Area
 */

// @lc code=start
function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
  return ((ax2 - ax1) * (ay2 - ay1)) + ((bx2 - bx1) * (by2 - by1)) - Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1)) * Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));
};
// @lc code=end

