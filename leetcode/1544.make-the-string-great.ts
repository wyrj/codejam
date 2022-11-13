/*
 * @lc app=leetcode id=1544 lang=typescript
 *
 * [1544] Make The String Great
 */

// @lc code=start
function makeGood(s: string): string {
  let arr: string[] = [];
  const diff = Math.abs('A'.charCodeAt(0) - 'a'.charCodeAt(0));
  for (const char of s) {
    if (
      arr.length === 0 ||
      Math.abs(arr[arr.length - 1].charCodeAt(0) - char.charCodeAt(0)) !== diff
    ) {
      arr.push(char);
    } else {
      arr.pop();
    }
  }
  return arr.join('');
};
// @lc code=end

