/*
 * @lc app=leetcode id=814 lang=typescript
 *
 * [814] Binary Tree Pruning
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

function pruneTree(root: TreeNode | null): TreeNode | null {
  function dfs(node: TreeNode | null): boolean {
    if (!node) {
      return false;
    }
    let hasOne = node.val === 1;
    if (dfs(node.left)) {
      hasOne = true;
    } else {
      node.left = null;
    }
    if (dfs(node.right)) {
      hasOne = true;
    } else {
      node.right = null;
    }
    return hasOne;
  }
  if (dfs(root)) {
    return root;
  } else {
    return null;
  }
};
// @lc code=end

