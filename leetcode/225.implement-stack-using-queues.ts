/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
class MyStack {
  private s: number[];
  constructor() {
    this.s = [];
  }

  push(x: number): void {
    this.s.push(x);
  }

  pop(): number {
    return <number>this.s.pop();
  }

  top(): number {
    return this.s[this.s.length - 1];
  }

  empty(): boolean {
    return this.s.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

