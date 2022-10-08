/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root || (!root.left && !root.right)) {
    return targetSum === root?.val;
  }
  return (
    (root.left ? hasPathSum(root.left, targetSum - root.val) : false) ||
    (root.right ? hasPathSum(root.right, targetSum - root.val) : false)
  );
};
// @lc code=end

