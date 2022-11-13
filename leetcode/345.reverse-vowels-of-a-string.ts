/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const arr = s.split('');
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const vowels = arr.filter(char => vowelSet.has(char));
  for (let i = 0; i < arr.length; i++) {
    if (vowelSet.has(arr[i])) {
      arr[i] = vowels.pop() as string;
    }
  }
  return arr.join('');
};
// @lc code=end

