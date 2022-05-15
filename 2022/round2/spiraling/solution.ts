import { main } from '../../../utils/main';

function solve(N: number, K: number): string {
  if (K % 2 === 1 || K >= N * N || K < N - 1) {
    return 'IMPOSSIBLE';
  }
  const ans: Array<[number, number]> = [];
  let ring = (N - 1) / 2;
  let shortcut = N * N - 1 - K;
  let base = 1;
  while (shortcut > 0) {
    const maxShortcut = ring * 8 - 2;
    const nextBase = base + (ring * 8);
    if (shortcut >= maxShortcut) {
      ans.push([base + ring, nextBase + ring - 1])
      shortcut = shortcut - maxShortcut;
    } else if (shortcut > maxShortcut - 8) {
      const delta = maxShortcut - shortcut;
      ans.push([base + (ring * (delta + 1)), nextBase + (ring - 1) * (delta + 1)]);
      shortcut = 0;
    }
    ring -= 1;
    base = nextBase;
  }

  // const check = ans.reduce((sum, [n1, n2]) => sum + (n2 - n1 - 1), 0);
  // if (check !== N * N - 1 - K) {
  //   console.log(N, K, check, ans);
  //   throw new Error('invalid');
  // }

  return ans.length === 0 ? '0' : `${ans.length}\n${ans.map(arr => arr.join(' ')).join('\n')}`;
}

main(async (io) => {
  const [N, K] = await io.getIntArray();
  return solve(N, K);
});