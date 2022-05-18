/*
 * @lc app=leetcode id=1302 lang=typescript
 *
 * [1302] Deepest Leaves Sum
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

function deepestLeavesSum(root: TreeNode | null): number {
  const sum: number[] = [];
  function dfs(node: TreeNode | null, depth: number) {
    if (!node) {
      return;
    }
    sum[depth] = (sum[depth] ?? 0) + node.val;
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
  dfs(root, 0);
  return sum[sum.length - 1] ?? 0;
};
// @lc code=end

