/*
 * @lc app=leetcode id=1202 lang=typescript
 *
 * [1202] Smallest String With Swaps
 */

// @lc code=start
function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const root = Array.from(s, (_, idx) => idx);
  function getRoot(i: number): number {
    return root[i] === i ? i : (root[i] = getRoot(root[i]));
  }
  for (const [a, b] of pairs) {
    const ra = getRoot(a);
    const rb = getRoot(b);
    if (ra < rb) {
      root[rb] = ra;
    } else if (rb < ra) {
      root[ra] = rb;
    }
  }
  const base = 'a'.charCodeAt(0);
  const count = Array.from(s, () => new Array(26).fill(0));
  for (let i = 0; i < s.length; i++) {
    const r = getRoot(i);
    count[r][s.charCodeAt(i) - base] += 1;
  }

  function *gen(i: number): Generator<string> {
    const c = count[i];
    for (let idx = 0; idx < c.length; idx++) {
      for (let j = 0; j < c[idx]; j++) {
        yield String.fromCharCode(idx + base);
      }
    }
  }
  const g: Array<Generator<string>> = [];
  const ans: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const r = getRoot(i);
    g[i] = i === r ? gen(i) : g[r];
    const v = g[i].next();
    if (!v.done) {
      ans.push(v.value);
    }
  }
  return ans.join('');
};
// @lc code=end
smallestStringWithSwaps('dcab', [[0, 3], [1, 2]]);
