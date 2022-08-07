/*
 * @lc app=leetcode id=114 lang=typescript
 *
 * [114] Flatten Binary Tree to Linked List
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  function recursive(node: TreeNode): TreeNode {
    const leftTail = node.left ? recursive(node.left) : null;
    const rightTail = node.right ? recursive(node.right) : null;
    if (leftTail) {
      leftTail.right = node.right;
      node.right = node.left;
    }
    node.left = null;
    return rightTail ?? leftTail ?? node;
  }
  if (root) {
    recursive(root);
  }
};
// @lc code=end

