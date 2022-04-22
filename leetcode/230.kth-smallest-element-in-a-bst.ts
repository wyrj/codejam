/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

function kthSmallest(root: TreeNode | null, k: number): number {
  function *inorder(n: TreeNode | null): Generator<TreeNode, undefined> {
    if (n === null) {
      return;
    }
    yield *inorder(n.left);
    yield n;
    yield *inorder(n.right);
  }
  const g = inorder(root);
  let result = g.next();
  for (let i = 1; i < k; i++) {
    result = g.next();
  }
  return result.done ? 0 : result.value.val;
};
// @lc code=end

