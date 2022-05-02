/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
 */

import { checkPrime } from "crypto";

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

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let depth = 0;
  let node: TreeNode | null = root;
  while (node) {
    depth += 1;
    node = node.left;
  }
  function check(num: number): boolean {
    const bits: number[] = [];
    while (num > 0) {
      bits.push(num % 2);
      num = Math.floor(num / 2);
    }
    bits.pop();
    let node = <TreeNode>root;
    for (const bit of bits.reverse()) {
      if (bit === 1) {
        if (!node.right) {
          return false;
        }
        node = node.right;
      } else {
        if (!node.left) {
          return false;
        }
        node = node.left;
      }
    }
    return true;
  }
  let low = Math.pow(2, depth - 1);
  let high = Math.pow(2, depth) - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (check(mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low - 1;
};
// @lc code=end

