/*
 * @lc app=leetcode id=1379 lang=typescript
 *
 * [1379] Find a Corresponding Node of a Binary Tree in a Clone of That Tree
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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
  function *iter(o: TreeNode | null, c: TreeNode | null): Generator<[TreeNode, TreeNode]> {
    if (!o || !c) {
      return;
    }
    yield [o, c];
    yield *iter(o.left, c.left);
    yield *iter(o.right, c.right);
  }
  for (const [o, c] of iter(original, cloned)) {
    if (o === target) {
      return c;
    }
  }
  return null;
};
// @lc code=end

