/*
 * @lc app=leetcode id=653 lang=typescript
 *
 * [653] Two Sum IV - Input is a BST
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

function findTarget(root: TreeNode | null, k: number): boolean {
  function *preorder(node: TreeNode | null): Generator<TreeNode> {
    if (!node) {
      return;
    }
    yield *preorder(node.left);
    yield node;
    yield *preorder(node.right);
  }
  function *postOrder(node: TreeNode | null): Generator<TreeNode> {
    if (!node) {
      return;
    }
    yield *postOrder(node.right);
    yield node;
    yield *postOrder(node.left);
  }
  const leftGen = preorder(root);
  const rightGen = postOrder(root);
  let left = leftGen.next();
  let right = rightGen.next();
  while (!left.done && !right.done && left.value.val < right.value.val) {
    const val = left.value.val + right.value.val;
    if (val === k) {
      return true;
    } else if (val < k) {
      left = leftGen.next();
    } else {
      right = rightGen.next();
    }
  }
  return false;
};
// @lc code=end

