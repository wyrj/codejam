/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const ans: number[] = [];
  let q: TreeNode[] = [root];
  while (q.length > 0) {
    ans.push(q[q.length - 1].val);
    const nextQ: TreeNode[] = [];
    for (const node of q) {
      if (node.left) {
        nextQ.push(node.left);
      }
      if (node.right) {
        nextQ.push(node.right);
      }
    }
    q = nextQ;
  }
  return ans;
};
// @lc code=end

