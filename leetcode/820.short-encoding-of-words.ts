/*
 * @lc app=leetcode id=820 lang=typescript
 *
 * [820] Short Encoding of Words
 */

// @lc code=start
type Trie = Map<string, Trie>;
function minimumLengthEncoding(words: string[]): number {
  const root: Trie = new Map();
  for (const w of words) {
    let now = root;
    for (let i = w.length - 1; i >= 0; i--) {
      const char = w.charAt(i);
      let next = now.get(char);
      if (!next) {
        next = new Map();
        now.set(char, next);
      }
      now = next;
    }
  }
  let ans = 0;
  function recursive(n: Trie, depth: number): void {
    if (n.size === 0) {
      ans += depth + 1;
      return;
    }
    for (const node of n.values()) {
      recursive(node, depth + 1);
    }
  }
  recursive(root, 0);
  return ans;
};
// @lc code=end

