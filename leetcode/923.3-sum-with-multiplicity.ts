/*
 * @lc app=leetcode id=923 lang=typescript
 *
 * [923] 3Sum With Multiplicity
 */

// @lc code=start
function threeSumMulti(arr: number[], target: number): number {
  const map = new Map<number, number>();
  for (const n of arr) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }
  let ans = 0;
  const entries = Array.from(map);
  for (const [n1, count1] of entries) {
    for (const [n2, count2] of entries) {
      const n3 = target - n1 - n2;
      const count3 = map.get(n3) ?? 0;
      if (n1 > n2 || n2 > n3 || !count3) {
        continue;
      }
      let addition = 0;
      if (n1 === n2 && n2 !== n3) {
        addition = count1 * (count2 - 1) * count3 / 2;
      } else if (n1 !== n2 && n2 === n3) {
        addition = count1 * count2 * (count3 - 1) / 2;
      } else if (n1 === n2 && n2 === n3) {
        addition = count1 * (count2 - 1) * (count3 - 2) / 6;
      } else {
        addition = count1 * count2 * count3;
      }
      ans = (ans + addition) % (1e9 + 7);
    }
  }
  return ans;
};
// @lc code=end

threeSumMulti([1,1,2,2,3,3,4,4,5,5], 8);