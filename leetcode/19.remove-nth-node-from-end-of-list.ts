/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const fake = { next: head };
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast?.next ?? null;
  }
  if (!fast) {
    return head?.next ?? null;
  }
  while (fast?.next) {
    fast = fast.next;
    slow = slow?.next ?? null;
  }
  (slow as ListNode).next = slow?.next?.next ?? null;
  return head;
};
// @lc code=end

