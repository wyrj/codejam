/*
 * @lc app=leetcode id=1996 lang=typescript
 *
 * [1996] The Number of Weak Characters in the Game
 */

// @lc code=start
function numberOfWeakCharacters(properties: number[][]): number {
  const ys = properties.sort(([x1, y1], [x2, y2]) => {
    return (x1 - x2) || (y2 - y1);
  }).map(([_, y]) => y);
  let count = 0;
  const stack: number[] = [];
  for (const y of ys) {
    while (stack.length > 0 && stack[stack.length - 1] < y) {
      count += 1;
      stack.pop();
    }
    stack.push(y);
  }
  return count;
};
// @lc code=end

