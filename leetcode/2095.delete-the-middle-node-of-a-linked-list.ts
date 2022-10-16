/*
 * @lc app=leetcode id=2095 lang=typescript
 *
 * [2095] Delete the Middle Node of a Linked List
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

function deleteMiddle(head: ListNode | null): ListNode | null {
  const fake = { val: 0, next: head };
  let slow = fake;
  let fast = fake;
  while (fast.next?.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }
  if (slow.next) {
    slow.next = slow.next.next;
  }
  return fake.next;
};
// @lc code=end

