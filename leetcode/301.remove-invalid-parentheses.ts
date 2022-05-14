/*
 * @lc app=leetcode id=301 lang=typescript
 *
 * [301] Remove Invalid Parentheses
 */

// @lc code=start
function removeInvalidParentheses(s: string): string[] {
  const ans: string[] = [];
  function r(s: string, startIndex: number, removeIndex: number, left: string, right: string): void {
    let parentCount = 0;
    for (let i = startIndex; i < s.length; i++) {
      if (s.charAt(i) === left) {
        parentCount += 1;
      } else if (s.charAt(i) === right) {
        parentCount -= 1;
      }
      if (parentCount < 0) {
        for (let j = removeIndex; j <= i; j++) {
          if (s.charAt(j) === right && (j === removeIndex || s.charAt(j - 1) !== right)) {
            r(`${s.slice(0, j)}${s.slice(j + 1)}`, i, j, left, right);
          }
        }
        return;
      }
    }
    if (left === ')') {
      ans.push(s.split('').reverse().join(''));
    } else {
      r(s.split('').reverse().join(''), 0, 0, right, left);
    }
  }
  r(s, 0, 0, '(', ')');
  return ans;
};
// @lc code=end

console.log(removeInvalidParentheses('()())()'));