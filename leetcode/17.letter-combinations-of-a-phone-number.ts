/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  const dictionary: string[][] = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];
  const ans: string[] = [];
  const base = '0'.charCodeAt(0);
  function dfs(str: string): void {
    if (str.length >= digits.length) {
      ans.push(str);
      return;
    }
    for (const char of dictionary[digits.charCodeAt(str.length) - base]) {
      dfs(`${str}${char}`);
    }
  }
  dfs('');
  return ans;
};
// @lc code=end

