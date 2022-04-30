/*
 * @lc app=leetcode id=1396 lang=typescript
 *
 * [1396] Design Underground System
 */

// @lc code=start
class UndergroundSystem {
    private tripingMap: Map<number, { stationName: string, t: number }>;
    private statistic: Map<string, Map<string, { totalTime: number, count: number }>>;

    constructor() {
      this.tripingMap = new Map();
      this.statistic = new Map();
    }

    checkIn(id: number, stationName: string, t: number): void {
      this.tripingMap.set(id, { stationName, t });
    }

    checkOut(id: number, stationName: string, t: number): void {
      const checkIn = this.tripingMap.get(id);
      if (!checkIn) {
        return;
      }
      this.tripingMap.delete(id);
      let m = this.statistic.get(checkIn.stationName);
      if (!m) {
        m = new Map<string, { totalTime: number, count: number }>();
        this.statistic.set(checkIn.stationName, m);
      }
      let obj = m.get(stationName);
      if (!obj) {
        m.set(stationName, { totalTime: t - checkIn.t, count: 1 });
      } else {
        obj.totalTime += t - checkIn.t;
        obj.count += 1;
      }
    }

    getAverageTime(startStation: string, endStation: string): number {
      const obj = this.statistic.get(startStation)?.get(endStation);
      if (!obj) {
        return NaN;
      }
      return obj.totalTime / obj.count;
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end
