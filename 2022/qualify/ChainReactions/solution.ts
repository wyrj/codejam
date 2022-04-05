import { main } from '../../../utils/main';

async function resolve(F: number[], P: number[]): Promise<string> {
  const nodes = Array.from(
    { length: F.length + 1 },
    () => new Set<number>(),
  )
  for (let i = 0; i < F.length; i++) {
    nodes[P[i]].add(i + 1);
  }
  let dfsCount = 0;
  async function dfs(idx: number): Promise<{ sum: number; minPick: number; }> {
    dfsCount += 1;
    if (dfsCount % 2000 === 0) {
      dfsCount = 0;
      await new Promise(resolve => setTimeout(resolve, 0));
    }
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
}

main(async (io, num) => {
  await io.getIntArray();
  const F = await io.getIntArray();
  const P = await io.getIntArray();
  io.printAns(num, await resolve(F, P));
});
