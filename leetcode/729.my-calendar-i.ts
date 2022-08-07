/*
 * @lc app=leetcode id=729 lang=typescript
 *
 * [729] My Calendar I
 */

// @lc code=start
class MyCalendar {
  private booking: Array<{ start: number, end: number }>;
  constructor() {
    this.booking = [];
  }

  book(start: number, end: number): boolean {
    const index = _.sortedIndexBy(this.booking, { start, end }, 'start');
    if (index < this.booking.length && this.booking[index].start < end) {
      return false;
    }
    if (index > 0 && this.booking[index - 1].end > start) {
      return false;
    }
    this.booking.splice(index, 0, { start, end });
    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

