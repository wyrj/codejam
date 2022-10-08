/*
 * @lc app=leetcode id=623 lang=typescript
 *
 * [623] Add One Row to Tree
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

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  if (depth === 1) {
    const n = { val, left: root, right: null };
    return n;
  }
  if (!root) {
    return null;
  }
  if (depth === 2) {
    const left = { val, left: root.left, right: null };
    const right = { val, left: null, right: root.right };
    root.left = left;
    root.right = right;
    return root;
  }
  addOneRow(root.left, val, depth - 1);
  addOneRow(root.right, val, depth - 1);
  return root;
};
// @lc code=end

