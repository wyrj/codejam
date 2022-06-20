/*
 * @lc app=leetcode id=968 lang=typescript
 *
 * [968] Binary Tree Cameras
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

const max = 1000;
function minCameraCover(root: TreeNode | null): number {
  function recursive(node: TreeNode | null): [number, number, number, number] {
    if (!node) {
      return [max, 0, 0, 0];
    }
    const [leftOn, leftOff, leftleftChild, leftRightChild] = recursive(node.left);
    const [rightOn, rightOff, rightLeftChild, rightRightChild] = recursive(node.right);
    const on = (
      1 +
      Math.min(leftleftChild + leftRightChild, leftOn, leftOff) +
      Math.min(rightLeftChild + rightRightChild, rightOn, rightOff)
    );
    const off = Math.min(leftOn + rightOff, leftOff + rightOn, leftOn + rightOn);
    return [on, off, Math.min(leftOn, leftOff), Math.min(rightOn, rightOff)];
  }
  const [on, off] = recursive(root);
  return Math.min(on, off);
};
// @lc code=end
