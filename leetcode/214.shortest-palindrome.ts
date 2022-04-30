/*
 * @lc app=leetcode id=214 lang=typescript
 *
 * [214] Shortest Palindrome
 */

// @lc code=start
function shortestPalindrome(s: string): string {
  const temp = `${s}-${s.split('').reverse().join('')}`;
  const table = new Array(temp.length).fill(0);
  table[0] = -1;
  table[1] = 0;
  let candidate = 0;
  let index = 2;
  while (index < table.length) {
    if (temp.charAt(index - 1) === temp.charAt(candidate)) {
      table[index] = candidate + 1;
      candidate += 1;
      index += 1;
    } else if (candidate > 0) {
      candidate = table[candidate];
    } else {
      table[index] = 0;
      index += 1;
    }
  }
  const len = table[table.length - 1] + 1;
  return `${s.slice(len).split('').reverse().join('')}${s}`;
};
// @lc code=end
shortestPalindrome('aacecaaa');