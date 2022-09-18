/*
 * @lc app=leetcode id=1457 lang=typescript
 *
 * [1457] Pseudo-Palindromic Paths in a Binary Tree
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

function pseudoPalindromicPaths (root: TreeNode | null): number {
  const oddSet = new Set<number>();
  let result = 0;
  function toggleSet(n: number): void {
    if (oddSet.has(n)) {
      oddSet.delete(n);
    } else {
      oddSet.add(n);
    }
  }
  function dfs(node: TreeNode): void {
    toggleSet(node.val);
    if (!node.left && !node.right) {
      if (oddSet.size <= 1) {
        result += 1;
      }
    } else {
      if (node.left) {
        dfs(node.left);
      }
      if (node.right) {
        dfs(node.right);
      }
    }
    toggleSet(node.val);
  }
  if (root) {
    dfs(root);
  }
  return result;
};
// @lc code=end

