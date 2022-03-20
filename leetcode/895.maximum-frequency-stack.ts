/*
 * @lc app=leetcode id=895 lang=typescript
 *
 * [895] Maximum Frequency Stack
 */
import _ from 'lodash';

// @lc code=start
class FreqStack {
    private map: Map<number, number>;
    private stack: Array<{ value: number, count: number }>;

    constructor() {
        this.map = new Map();
        this.stack = [];
    }

    push(val: number): void {
        const count = (this.map.get(val) ?? 0) + 1;
        this.map.set(val, count);
        const obj = { value: val, count };
        const index = _.sortedLastIndexBy(this.stack, obj, 'count');
        this.stack.splice(index, 0, obj);
    }

    pop(): number {
        const { value } = this.stack.pop();
        this.map.set(value, this.map.get(value) - 1);
        return value;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end

