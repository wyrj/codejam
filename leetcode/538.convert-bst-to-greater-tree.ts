/*
 * @lc app=leetcode id=538 lang=typescript
 *
 * [538] Convert BST to Greater Tree
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

function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }
  function *traverse(root: TreeNode): Generator<TreeNode> {
    if (root.right) {
      yield *traverse(root.right);
    }
    yield root;
    if (root.left) {
      yield *traverse(root.left);
    }
  }
  let sum = 0;
  for (const node of traverse(root)) {
    sum += node.val;
    node.val = sum;
  }
  return root;
};

// @lc code=end

