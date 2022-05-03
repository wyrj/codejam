/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {
  private inStack: number[];
  private outStack: number[];

  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  public push(x: number): void {
    this.inStack.push(x);
  }

  public pop(): number {
    this.checkStack();
    return <number>this.outStack.pop();
  }

  public peek(): number {
    this.checkStack();
    return this.outStack[this.outStack.length - 1];
  }

  public empty(): boolean {
    return this.outStack.length === 0 && this.inStack.length === 0;
  }

  private checkStack(): void {
    if (this.outStack.length !== 0) {
      return;
    }
    while (this.inStack.length > 0) {
      this.outStack.push(<number>this.inStack.pop());
    }
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

