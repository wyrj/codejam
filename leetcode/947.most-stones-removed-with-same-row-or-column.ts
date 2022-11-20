/*
 * @lc app=leetcode id=947 lang=typescript
 *
 * [947] Most Stones Removed with Same Row or Column
 */

// @lc code=start
function removeStones(stones: number[][]): number {
  const roots = stones.map((_, idx) => idx);
  function getRoot(idx: number): number {
    if (roots[idx] === idx) {
      return idx;
    }
    return roots[idx] = getRoot(roots[idx]);
  }
  function loop(dim: number): void {
    const m = new Map<number, number>();
    for (let i = 0; i < stones.length; i++) {
      const v = stones[i][dim];
      const parent = m.get(v);
      if (parent === undefined) {
        m.set(v, i);
      } else {
        m.set(v, parent);
        roots[getRoot(i)] = getRoot(parent);
      }
    }
  }
  loop(0);
  loop(1);
  const s = new Set();
  for (let i = 0; i < roots.length; i++) {
    s.add(getRoot(i));
  }
  return stones.length - s.size;
};
// @lc code=end

removeStones([[0, 1], [1, 0], [1, 1]])