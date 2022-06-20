/*
 * @lc app=leetcode id=1268 lang=typescript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
type TrieNode = {
  words: string[];
  children: Map<string, TrieNode>;
}
function suggestedProducts(products: string[], searchWord: string): string[][] {
  const trieRoot: TrieNode = { words: [], children: new Map() };
  for (const w of products.sort()) {
    let now = trieRoot;
    for (const char of w) {
      let next = now.children.get(char);
      if (!next) {
        next = { words: [], children: new Map() };
        now.children.set(char, next);
      }
      next.words.push(w);
      now = next;
    }
  }
  const ans: string[][] = [];
  let now: TrieNode | undefined = trieRoot;
  for (const char of searchWord) {
    const next = now?.children.get(char);
    ans.push(next?.words.slice(0, 3) ?? []);
    now = next;
  }
  return ans;
};
// @lc code=end

