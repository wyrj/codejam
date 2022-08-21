/*
 * @lc app=leetcode id=936 lang=typescript
 *
 * [936] Stamping The Sequence
 */

// @lc code=start
function movesToStamp(stamp: string, target: string): number[] {
  const result: number[] = [];
  let str = target;
  function makeStarString(count: number): string {
    return ''.padEnd(count, '*');
  }
  function check(s: string, idx: number): boolean {
    if (s === str.slice(idx, idx + s.length)) {
      result.unshift(idx);
      str = `${str.slice(0, idx)}${makeStarString(s.length)}${str.slice(idx + s.length)}`;
      return true;
    }
    return false;
  }
  let strChanged = true;
  while (strChanged) {
    strChanged = false;
    for (let starCount = 0; starCount < stamp.length; starCount++) {
      for (let pre = 0; pre <= starCount; pre++) {
        const tempStamp = `${makeStarString(pre)}${stamp.slice(pre, pre + stamp.length - starCount)}${makeStarString(starCount - pre)}`;
        let changed = true;
        while (changed) {
          changed = false;
          for (let i = 0; i <= str.length - stamp.length; i++) {
            if (check(tempStamp, i)) {
              changed = true;
              strChanged = true;
            }
          }
        }
      }
    }
  }
  return str === makeStarString(str.length) ? result : [];
};
// @lc code=end

movesToStamp('zbs', 'zbzbsbszbssbzbszbsss');