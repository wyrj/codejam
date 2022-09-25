/*
 * @lc app=leetcode id=609 lang=typescript
 *
 * [609] Find Duplicate File in System
 */

// @lc code=start
function findDuplicate(paths: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const path of paths) {
    const s = path.split(' ');
    if (s.length === 0) {
      continue;
    }
    const p = s.shift() as string;
    for (const name of s) {
      const match = name.match(/(.*)(\(.*\))/);
      if (!match || match.length < 2) {
        continue;
      }
      const f = `${p}/${match[1]}`;
      const arr = map.get(match[2]);
      if (arr) {
        arr.push(f);
      } else {
        map.set(match[2], [f]);
      }
    }
  }
  return Array.from(map.values()).filter(a => a.length > 1);
};
// @lc code=end

