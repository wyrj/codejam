/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
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

/**
 Do not return anything, modify head in-place instead.
 */
interface ListNode {
    val: number;
    next: ListNode | null;
}
function reorderList(head: ListNode | null): void {
    if (!head?.next) {
        return;
    }
    let n1 = head;
    let n2 = head;
    while (n2 != null) {
        n1 = n1.next;
        n2 = n2.next?.next;
    }
    let mid = n1;
    let n = mid;
    while (n.next != null) {
        const next = n.next;
        n.next = next.next;
        next.next = mid;
        mid = next;
    }
    n1 = head;
    n2 = mid;
    while (n1 != null) {
        const next = n1.next;
        n1.next = n2;
        n2 = next;
        n1 = n1.next;
    }
};
// @lc code=end
