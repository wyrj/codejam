/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  function r(node: TreeNode): { n: number, r: TreeNode } {
    const left = node.left ? r(node.left) : null;
    const right = node.right ? r(node.right) : null;
    if (left?.n === 2) {
      return left;
    }
    if (right?.n === 2) {
      return right;
    }
    return {
      n: (left?.n ?? 0) + (right?.n ?? 0) + ((node === p || node === q) ? 1 : 0),
      r: node,
    };
  }
  return root ? r(root).r : null;
};
// @lc code=end

