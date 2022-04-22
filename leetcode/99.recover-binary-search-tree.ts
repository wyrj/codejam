/*
 * @lc app=leetcode id=99 lang=typescript
 *
 * [99] Recover Binary Search Tree
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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
  function *traverse(node: TreeNode | null): Generator<TreeNode> {
    if (!node) {
      return;
    }
    yield *traverse(node.left);
    yield node;
    yield *traverse(node.right);
  }
  const g = traverse(root);
  let last = g.next();
  let next = g.next();
  let left: TreeNode | null = null;
  let right: TreeNode | null = null;
  while (!next.done) {
    if (last.value.val > next.value.val) {
      if (!left) {
        left = last.value;
      }
      right = next.value;
    }
    last = next;
    next = g.next();
  }
  if (left && right) {
    const tmp = left.val;
    left.val = right.val;
    right.val = tmp;
  }
};
// @lc code=end

