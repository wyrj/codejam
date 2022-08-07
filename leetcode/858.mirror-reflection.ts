/*
 * @lc app=leetcode id=858 lang=typescript
 *
 * [858] Mirror Reflection
 */

// @lc code=start
function mirrorReflection(p: number, q: number): number {
  const size = p * q;
  let x = 0;
  let xDir = 1;
  let y = 0;
  let yDir = 1;
  do {
    x += p * xDir;
    if (x === size) {
      xDir = -1;
    } else if (x === 0) {
      xDir = 1;
    }
    y += q * yDir;
    if (y === size) {
      yDir = -1;
    } else if (y === 0) {
      yDir = 1;
    }
  } while ((x !== 0 && x !== size) || (y !== 0 && y !== size));
  return (x === size && y === size) ? 1 : (x === 0 ? 2 : 0);
};
// @lc code=end

mirrorReflection(3, 1);