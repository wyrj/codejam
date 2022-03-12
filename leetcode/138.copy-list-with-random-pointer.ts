/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
interface RandomNode {
    val: number;
    next: RandomNode | null;
    random: RandomNode | null;
}
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: RandomNode | null): RandomNode | null {
    const map = new Map<RandomNode, RandomNode>();
    function ensureNode(n: RandomNode | null): RandomNode | null {
        if (!n) {
            return null;
        }
        let node = map.get(n);
        if (!node) {
            node = { val: n.val, next: null, random: null };
            map.set(n, node);
            node.next = ensureNode(n.next);
            node.random = ensureNode(n.random);
        }
        return node;
    }
    return ensureNode(head);
};
// @lc code=end

