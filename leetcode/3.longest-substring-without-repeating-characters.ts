/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let len = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    while (set.has(char)) {
      set.delete(s.charAt(i - len));
      len -= 1;
    }
    set.add(char);
    len += 1;
    ans = Math.max(len, ans);
  }
  return ans;
};
// @lc code=end

