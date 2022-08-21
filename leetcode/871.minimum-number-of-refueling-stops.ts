/*
 * @lc app=leetcode id=871 lang=typescript
 *
 * [871] Minimum Number of Refueling Stops
 */
import _ from 'lodash';

// @lc code=start
function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
  stations.sort((lhs, rhs) => lhs[0] - rhs[0]);
  const pq: number[] = [];
  let stationIndex = 0;
  let currFuel = startFuel;
  let stopCount = 0;
  while (currFuel < target) {
    while (stationIndex < stations.length && stations[stationIndex][0] <= currFuel) {
      const index = _.sortedIndex(pq, stations[stationIndex][1]);
      pq.splice(index, 0, stations[stationIndex][1]);
      stationIndex += 1;
    }
    if (pq.length === 0) {
      return -1;
    }
    currFuel += pq.pop() as number;
    stopCount += 1;
  }

  return stopCount;
};
// @lc code=end

