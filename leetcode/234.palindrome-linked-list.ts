/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return true;
  }
  let one = head;
  let two: ListNode | null = head;
  while (two?.next) {
    one = <ListNode>one.next;
    two = two.next.next;
  }
  if (two) {
    one = <ListNode>one.next;
  }
  let curr: ListNode | null = one;
  let next = curr.next;
  curr.next = null;
  while (next) {
    let nn = next.next;
    next.next = curr;
    curr = next;
    next = nn;
  }
  let currHead: ListNode | null = head;
  while (currHead && curr) {
    if (currHead.val !== curr.val) {
      return false;
    }
    currHead = currHead.next;
    curr = curr.next;
  }
  return true;
};
// @lc code=end

