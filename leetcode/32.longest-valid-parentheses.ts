/*
 * @lc app=leetcode id=32 lang=typescript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  if (s.length < 2) {
    return 0;
  }
  const startIndex = s.indexOf('(');
  s = s.slice(startIndex);
  let leftCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      leftCount += 1;
    } else {
      leftCount -= 1;
    }
    if (leftCount < 0) {
      return Math.max(i, longestValidParentheses(s.slice(i + 1)))
    }
  }
  if (leftCount === 0) {
    return s.length;
  } else {
    return longestValidParentheses(s.split('').reverse().map((char) => char === '(' ? ')' : '(').join(''));
  }
};
// @lc code=end

