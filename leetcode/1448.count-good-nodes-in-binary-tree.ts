/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
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

function goodNodes(root: TreeNode | null): number {
  function dfs(n: TreeNode | null, max: number): number {
    if (!n) {
      return 0;
    }
    if (n.val >= max) {
      return dfs(n.left, n.val) + dfs(n.right, n.val) + 1;
    } else {
      return dfs(n.left, max) + dfs(n.right, max);
    }
  }
  return dfs(root, -1e5);
};
// @lc code=end

