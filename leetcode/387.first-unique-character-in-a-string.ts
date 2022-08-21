/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const map = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - base] += 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s.charCodeAt(i) - base] === 1) {
      return i;
    }
  }
  return -1;
};
// @lc code=end

