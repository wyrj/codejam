/*
 * @lc app=leetcode id=732 lang=typescript
 *
 * [732] My Calendar III
 */

// @lc code=start
interface Segment {
  start: number;
  end: number;
  children: Segment[];
}
class MyCalendarThree {
  private seg: Segment[];
  private depth: number;

  constructor() {
    this.seg = [];
    this.depth = 0;
  }

  public book(start: number, end: number): number {
    this._book(start, end, this.seg, 1);
    return this.depth;
  }

  private _book(start: number, end: number, seg: Segment[], depth: number): void {
    this.depth = Math.max(depth, this.depth);
    let intersectStart = 0;
    while (intersectStart < seg.length && seg[intersectStart].end <= start) {
      intersectStart += 1;
    }
    if (intersectStart === seg.length) {
      seg.push({ start, end, children: [] });
      return;
    }
    if (end <= seg[intersectStart].start) {
      seg.splice(intersectStart, 0, { start, end, children: [] });
      return;
    }
    let intersectEnd = intersectStart;
    while (intersectEnd < seg.length && seg[intersectEnd].start < end) {
      intersectEnd += 1;
    }
    let children: Segment[] = [];
    for (let i = intersectStart; i < intersectEnd; i++) {
      this._book(Math.max(start, seg[i].start), Math.min(end, seg[i].end), seg[i].children, depth + 1);
      children = children.concat(seg[i].children);
    }
    seg.splice(
      intersectStart,
      intersectEnd - intersectStart,
      {
        start: Math.min(start, seg[intersectStart].start),
        end: Math.max(end, seg[intersectEnd - 1]?.end ?? -1),
        children,
      }
    );
  }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

