/*
 * @lc app=leetcode id=116 lang=typescript
 *
 * [116] Populating Next Right Pointers in Each Node
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

interface Node {
    val: number;
    left: Node | null;
    right: Node | null;
    next: Node | null;
}
function connect(root: Node | null): Node | null {
   if (!root) {
       return root;
   }
   let n = root;
   let nextLayer = n.left;
   while (n) {
       if (!n.left) {
           return root;
       }
       n.left.next = n.right;
       if (n.next) {
           n.right.next = n.next.left;
           n = n.next;
       } else {
           n = nextLayer;
           nextLayer = n.left;
       }
   }
};
// @lc code=end

