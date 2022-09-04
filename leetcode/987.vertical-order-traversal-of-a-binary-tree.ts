/*
 * @lc app=leetcode id=987 lang=typescript
 *
 * [987] Vertical Order Traversal of a Binary Tree
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

function verticalTraversal(root: TreeNode | null): number[][] {
  const result: number[][][] = [];
  let firstCol = 1;
  function dfs(node: TreeNode | null, row: number, col: number): void {
    if (!node) {
      return;
    }
    if (col < firstCol) {
      result.unshift([]);
      firstCol = col;
    }
    if (col - firstCol + 1 > result.length) {
      result.push([]);
    }
    if (!result[col - firstCol][row]) {
      result[col - firstCol][row] = [];
    }
    result[col - firstCol][row].push(node.val);
    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1);
  }
  dfs(root, 0, 0);
  return result.map(arr => {
    return arr.reduce((a, v) => {
      v.sort((lhs, rhs) => lhs - rhs);
      return a.concat(v);
    }, []);
  });
};
// @lc code=end

