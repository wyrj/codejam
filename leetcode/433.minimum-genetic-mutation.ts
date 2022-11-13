/*
 * @lc app=leetcode id=433 lang=typescript
 *
 * [433] Minimum Genetic Mutation
 */

// @lc code=start
function minMutation(start: string, end: string, bank: string[]): number {
  const map = new Map(bank.map(s => [s, -1]));
  const charSet = ['A', 'C', 'G', 'T'];
  function oneMutationAction(s: string): string[] {
    const r = [] as string[];
    for (let i = 0; i < s.length; i++) {
      for (const char of charSet) {
        if (char !== s.charAt(i)) {
          r.push(`${s.slice(0, i)}${char}${s.slice(i + 1)}`);
        }
      }
    }
    return r;
  }
  const q = [{ gene: start, depth: 0 }];
  while (q.length > 0) {
    const { gene, depth } = q.shift() as { gene: string, depth: number };
    for (const next of oneMutationAction(gene)) {
      if (map.get(next) === -1) {
        if (next === end) {
          return depth + 1;
        }
        q.push({ gene: next, depth: depth + 1});
        map.set(next, depth + 1);
      }
    }
  }
  return -1;
};
// @lc code=end

