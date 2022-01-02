/*
 * @lc app=leetcode id=1290 lang=typescript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
interface ListNode{
    val: number;
    next: ListNode;
}

function getDecimalValue(head: ListNode | null): number {
    let result = 0;
    while (head) {
        result = result * 2 + head.val;
        head = head.next;
    }
    return result;
};
// @lc code=end

