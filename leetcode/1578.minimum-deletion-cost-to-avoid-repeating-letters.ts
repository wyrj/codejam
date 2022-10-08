/*
 * @lc app=leetcode id=1578 lang=typescript
 *
 * [1578] Minimum Time to Make Rope Colorful
 */

// @lc code=start
function minCost(colors: string, neededTime: number[]): number {
  let prev = '';
  let prevIndex = -1;
  let result = 0;
  for (let i = 0; i < colors.length; i++) {
    const char = colors.charAt(i);
    if (char === prev) {
      if (neededTime[i] < neededTime[prevIndex]) {
        result += neededTime[i];
      } else {
        result += neededTime[prevIndex];
        prevIndex = i;
      }
    } else {
      prev = char;
      prevIndex = i;
    }
  }
  return result;
};
// @lc code=end

