/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }
  const node: TreeNode = { val: preorder[0], left: null, right: null };
  const index = inorder.indexOf(preorder[0]);
  node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return node;
};
// @lc code=end

