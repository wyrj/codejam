/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  if (!root) {
    return [];
  }
  let q = [root];
  while (q.length > 0) {
    const nextQ: TreeNode[] = [];
    const arr: number[] = [];
    for (const n of q) {
      arr.push(n.val);
      if (n.left) {
        nextQ.push(n.left);
      }
      if (n.right) {
        nextQ.push(n.right);
      }
    }
    q = nextQ;
    result.push(arr);
  }
  return result;
};
// @lc code=end

