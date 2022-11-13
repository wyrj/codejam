/*
 * @lc app=leetcode id=901 lang=typescript
 *
 * [901] Online Stock Span
 */

// @lc code=start
interface E {
  price: number;
  span: number;
}
class StockSpanner {
  private stack: E[];

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    const element = { price, span: 1 };
    while (this.stack.length > 0 && this.stack[this.stack.length - 1].price <= price) {
      element.span += (this.stack.pop() as E).span;
    }
    this.stack.push(element);
    return element.span;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

