/*
 * @lc app=leetcode id=1239 lang=typescript
 *
 * [1239] Maximum Length of a Concatenated String with Unique Characters
 */

// @lc code=start
function maxLength(arr: string[]): number {
  const base = 'a'.charCodeAt(0);

  const map = new Map<string, number>();
  function re(idx: number, state: boolean[]): number {
    if (idx === arr.length) {
      return 0;
    }
    const key = `${idx},${state}`;
    let value = map.get(key);
    if (value === undefined) {
      const s = arr[idx];
      let exist = false;
      const localState = state.slice();
      for (const char of s) {
        const i = char.charCodeAt(0) - base;
        if (!localState[i]) {
          localState[i] = true;
        } else {
          exist = true;
          break;
        }
      }
      value = Math.max(
        re(idx + 1, state),
        exist ? 0 : (s.length + re(idx + 1, localState)),
      );
      map.set(key, value);
    }
    return value;
  }

  return re(0, new Array(26).fill(false));
};
// @lc code=end

