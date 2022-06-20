/*
 * @lc app=leetcode id=745 lang=typescript
 *
 * [745] Prefix and Suffix Search
 */

// @lc code=start
type TrieNode = {
  wordsIndex: number[],
  children: Map<string, TrieNode>,
}
class WordFilter {
  private prefixTrie: TrieNode;
  private suffixTrie: TrieNode;

  constructor(words: string[]) {
    this.prefixTrie = {
      wordsIndex: Array.from(words, (_, idx) => idx),
      children: new Map()
    };
    this.suffixTrie = {
      wordsIndex: Array.from(words, (_, idx) => idx),
      children: new Map()
    };

    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      this.addWord(w, i);
    }
  }

  private addWord(w: string, idx: number): void {
    let trie = this.prefixTrie;
    for (const char of w) {
      let next = trie.children.get(char);
      if (!next) {
        next = { wordsIndex: [], children: new Map() };
        trie.children.set(char, next);
      }
      next.wordsIndex.push(idx);
      trie = next;
    }

    trie = this.suffixTrie;
    for (let i = w.length - 1; i >= 0; i--) {
      const char = w.charAt(i);
      let next = trie.children.get(char);
      if (!next) {
        next = { wordsIndex: [], children: new Map() };
        trie.children.set(char, next);
      }
      next.wordsIndex.push(idx);
      trie = next;
    }
  }

  private findIndexes(trie: TrieNode, w: string): number[] {
    if (w.length === 0) {
      return trie.wordsIndex;
    }
    const next = trie.children.get(w.charAt(0));
    return next ? this.findIndexes(next, w.slice(1)) : [];
  }

  public f(prefix: string, suffix: string): number {
    const prefixIndexes = this.findIndexes(this.prefixTrie, prefix);
    const suffixIndexes = this.findIndexes(this.suffixTrie, suffix.split('').reverse().join(''));
    let i = prefixIndexes.length - 1;
    let j = suffixIndexes.length - 1;
    while (i >= 0 && j >= 0) {
      if (prefixIndexes[i] > suffixIndexes[j]) {
        i -= 1;
      } else if (prefixIndexes[i] < suffixIndexes[j]) {
        j -= 1;
      } else {
        return prefixIndexes[i];
      }
    }
    return -1;
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */
// @lc code=end

