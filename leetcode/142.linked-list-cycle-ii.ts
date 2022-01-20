/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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

interface ListNode {
    val: number;
    next: ListNode | null;
}
function detectCycle(head: ListNode | null): ListNode | null {
   if (!head) {
       return null;
   }
   let fast = head;
   let slow = head;
   while (fast !== null && slow !== null) {
       fast = fast.next?.next ?? null;
       slow = slow.next;
       if (fast === slow) {
           break;
       }
   }
   if (fast === null) {
       return null;
   }
   slow = head;
   while (fast !== slow) {
       fast = fast.next;
       slow = slow.next;
   }
   return fast;
};
// @lc code=end

