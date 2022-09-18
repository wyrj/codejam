/*
 * @lc app=leetcode id=393 lang=typescript
 *
 * [393] UTF-8 Validation
 */

// @lc code=start
function validUtf8(data: number[]): boolean {
  function isOne(n: number, idx: number): boolean {
    const bits = 1 << idx;
    return (n & bits) === bits;
  }
  let concatCount = 0;
  for (const num of data) {
    const leadingOne = isOne(num, 7);
    if (leadingOne && !isOne(num, 6)) {
      if (concatCount === 0) {
        return false;
      }
      concatCount -= 1;
    } else {
      if (concatCount !== 0) {
        return false;
      }
      if (leadingOne) {
        if (!isOne(num, 5)) {
          concatCount = 1;
        } else if (!isOne(num, 4)) {
          concatCount = 2;
        } else if (!isOne(num, 3)) {
          concatCount = 3;
        } else {
          return false;
        }
      }
    }
  }
  return concatCount === 0;
};
// @lc code=end
