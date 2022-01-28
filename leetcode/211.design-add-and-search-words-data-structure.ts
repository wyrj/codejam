/*
 * @lc app=leetcode id=211 lang=typescript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start
type TrieNode = {
    end: boolean,
    children: Map<string, TrieNode>,
}
class WordDictionary {
    private trie: TrieNode;

    constructor() {
        this.trie = {
            end: false,
            children: new Map(),
        };
    }

    addWord(word: string): void {
        let curr = this.trie;
        for (const char of word) {
            if (curr.children.has(char)) {
                curr = curr.children.get(char);
            } else {
                const trie = { end: false, children: new Map() };
                curr.children.set(char, trie);
                curr = trie;
            }
        }
        curr.end = true;
    }

    search(word: string): boolean {
        let candidate: TrieNode[] = [this.trie];
        for (const char of word) {
            const nextCandidate: TrieNode[] = [];
            for (const curr of candidate) {
                if (char === '.') {
                    nextCandidate.push(...curr.children.values());
                } else if (curr.children.has(char)) {
                    nextCandidate.push(curr.children.get(char));
                }
            }
            candidate = nextCandidate;
        }
        return candidate.some(trie => trie.end);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
const d = new WordDictionary();
d.addWord('bad');
d.addWord('dad');
d.addWord('mad');
console.log(d.search('pad'));
console.log(d.search('bad'));
console.log(d.search('.ad'));
console.log(d.search('b..'));
