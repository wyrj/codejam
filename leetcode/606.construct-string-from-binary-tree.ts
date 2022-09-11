/*
 * @lc app=leetcode id=606 lang=typescript
 *
 * [606] Construct String from Binary Tree
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

function tree2str(root: TreeNode | null): string {
  function dfs(node: TreeNode): string {
    return `${node.val}${node.left ? `(${dfs(node.left)})` : (node.right ? '()' : '')}${node.right ? `(${dfs(node.right)})` : ''}`;
  }
  return root ? dfs(root) : '';
};
// @lc code=end

