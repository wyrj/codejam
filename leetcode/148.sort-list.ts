/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
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

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let one = head;
    let two = head.next;
    while (two?.next) {
        one = one.next;
        two = two.next?.next;
    }
    let list2 = sortList(one.next);
    one.next = null;
    let list1 = sortList(head);
    const fake = { val: 0, next: null };
    let curr = fake;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    if (list1) {
        curr.next = list1;
    } else if (list2) {
        curr.next = list2;
    }
    return fake.next;
};
// @lc code=end

