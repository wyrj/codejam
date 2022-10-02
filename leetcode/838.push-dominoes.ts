/*
 * @lc app=leetcode id=838 lang=typescript
 *
 * [838] Push Dominoes
 */

// @lc code=start
function pushDominoes(dominoes: string): string {
  const candidate = dominoes.split('');
  const nearest = Array.from(candidate, (c) => (c === '.' ? candidate.length : 0));
  let last = 'L';
  for (let i = 0; i < dominoes.length; i++) {
    const char = dominoes.charAt(i);
    if (char === '.') {
      if (last === 'R') {
        nearest[i] = nearest[i - 1] + 1;
      }
    } else {
      last = char;
    }
  }
  last = 'R';
  for (let i = dominoes.length - 1; i >= 0; i--) {
    const char = dominoes.charAt(i);
    if (char === '.') {
      if (last === 'L') {
        const n = nearest[i + 1] + 1;
        if (n < nearest[i]) {
          nearest[i] = n;
          candidate[i] = 'L';
        } else if (n > nearest[i]) {
          candidate[i] = 'R';
        }
      } else {
        candidate[i] = nearest[i] !== candidate.length ? 'R' : '.'
      }
    } else {
      last = char;
    }
  }
  return candidate.join('');
};
// @lc code=end

