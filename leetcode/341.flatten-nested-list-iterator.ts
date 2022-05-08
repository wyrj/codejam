/*
 * @lc app=leetcode id=341 lang=typescript
 *
 * [341] Flatten Nested List Iterator
 */
interface NestedInteger {
  isInteger(): boolean;
  getInteger(): number | null;
  getList(): NestedInteger[];
}

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

function *it(list: NestedInteger[]): Generator<number> {
  for (const ni of list) {
    if (ni.isInteger()) {
      yield <number>ni.getInteger();
    } else {
      yield *it(ni.getList());
    }
  }
}

class NestedIterator {
  private g: Generator<number>;
  private n: IteratorResult<number>;

  constructor(nestedList: NestedInteger[]) {
    this.g = it(nestedList);
    this.n = this.g.next();
  }

  public hasNext(): boolean {
    return this.n.done !== true;
  }

	public next(): number {
    const v = this.n.done ? NaN : this.n.value;
    this.n = this.g.next();
    return v;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
// @lc code=end