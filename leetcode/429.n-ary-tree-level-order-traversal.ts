/*
 * @lc app=leetcode id=429 lang=typescript
 *
 * [429] N-ary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

interface Node {
  val: number;
  children: Node[];
}
function levelOrder(root: Node | null): number[][] {
  const result: number[][] = [];
  if (!root) {
    return result;
  }
  let q = [root];
  while (q.length) {
    result.push(q.map(n => n.val));
    q = q.reduce<Node[]>((arr, n) => {
      arr.push(...n.children);
      return arr;
    }, [])
  }
  return result;
};
// @lc code=end

