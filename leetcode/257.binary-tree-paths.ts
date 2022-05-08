/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode): string[] {
  if (!root.left && !root.right) {
    return [`${root.val}`];
  }
  const ans: string[] = [];
  if (root.left) {
    ans.push(...binaryTreePaths(root.left).map(s => `${root.val}->${s}`));
  }
  if (root.right) {
    ans.push(...binaryTreePaths(root.right).map(s => `${root.val}->${s}`));
  }
  return ans;
};
// @lc code=end

