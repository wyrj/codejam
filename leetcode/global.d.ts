export interface ListNode<T = number> {
    val: T;
    next: ListNode<T> | null;
}

export interface TreeNode<T = number> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
}