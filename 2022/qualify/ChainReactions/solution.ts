import { main } from '../../../utils/main';

main(async (io) => {
  await io.getIntArray();
  const F = await io.getIntArray();
  const P = await io.getIntArray();

  const nodes = Array.from(
    { length: F.length + 1 },
    () => new Set<number>(),
  )
  for (let i = 0; i < F.length; i++) {
    nodes[P[i]].add(i + 1);
  }
  async function dfs(idx: number): Promise<{ sum: number; minPick: number; }> {
    await Promise.resolve();
    const childSet = nodes[idx];
    const fValue = F[idx - 1];
    if (childSet.size === 0) {
      return { sum: fValue, minPick: fValue };
    }
    let sum = 0;
    let minPick = Number.MAX_SAFE_INTEGER;
    for (const result of await Promise.all(Array.from(childSet, dfs))) {
      sum += result.sum;
      minPick = Math.min(minPick, result.minPick);
    }
    if (minPick < fValue) {
      sum += fValue - minPick;
      minPick = fValue;
    }
    return { sum, minPick: minPick };
  }
  return `${(await dfs(0)).sum}`;
});
