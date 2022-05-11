/*
 * @lc app=leetcode id=297 lang=typescript
 *
 * [297] Serialize and Deserialize Binary Tree
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const arr: Array<number | null> = [];
  const queue: Array<TreeNode | null> = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    arr.push(node ? node.val : null);
    if (node) {
      queue.push(node.left, node.right);
    }
  }
  return JSON.stringify(arr);
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const arr = <Array<number | null>>JSON.parse(data);
  if (arr[0] === null) {
    return null;
  }
  const root = { val: arr[0], left: null, right: null };
  const queue: TreeNode[] = [root];
  let idx = 1;
  while (queue.length > 0) {
    const node = <TreeNode>queue.shift();
    const leftValue = arr[idx];
    if (leftValue === null) {
      node.left = null;
    } else {
      const newNode = { val: leftValue, left: null, right: null };
      node.left = newNode;
      queue.push(newNode);
    }
    idx += 1;
    const rightValue = arr[idx];
    if (rightValue === null) {
      node.right = null;
    } else {
      const newNode = { val: rightValue, left: null, right: null };
      node.right = newNode;
      queue.push(newNode);
    }
    idx += 1;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
