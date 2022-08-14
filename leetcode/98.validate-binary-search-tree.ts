/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null): boolean {
  function* inorder(node: TreeNode | null): Generator<TreeNode> {
    if (!node) {
      return;
    }
    yield *inorder(node.left);
    yield node;
    yield *inorder(node.right);
  }
  let last: TreeNode | null = null;
  for (const n of inorder(root)) {
    if (last && last.val >= n.val) {
      return false;
    }
    last = n;
  }
  return true;
};
// @lc code=end

