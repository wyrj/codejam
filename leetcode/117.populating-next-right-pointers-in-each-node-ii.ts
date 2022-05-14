/*
 * @lc app=leetcode id=117 lang=typescript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (!root) {
    return null;
  }
  let queue = [root];
  while (queue.length > 0) {
    const nextQ = [];
    let curr: Node = { val: 0, left: null, right: null, next: null };
    for (const node of queue) {
      curr.next = node;
      curr = node;
      if (node.left) {
        nextQ.push(node.left);
      }
      if (node.right) {
        nextQ.push(node.right);
      }
    }
    queue = nextQ;
  }
  return root;
};
// @lc code=end

