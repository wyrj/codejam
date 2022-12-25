/*
 * @lc app=leetcode id=841 lang=typescript
 *
 * [841] Keys and Rooms
 */

// @lc code=start
function canVisitAllRooms(rooms: number[][]): boolean {
  const q = [0];
  const visit = new Set([0]);
  while (q.length > 0) {
    for (const key of rooms[q.shift() as number]) {
      if (!visit.has(key)) {
        visit.add(key);
        q.push(key);
      }
    }
  }
  return visit.size === rooms.length;
};
// @lc code=end

