import { main } from '../../../utils/main';

main(async (io) => {
  const [N, P] = await io.getIntArray();
  const X: number[][] = [];
  for (let i = 0; i < N; i++) {
    X.push(await io.getIntArray());
  }

  let last = [{ now: 0, total: 0 }, { now: 0, total: 0 }];
  for (const x of X) {
    const min = Math.min(...x);
    const max = Math.max(...x);

    const diffMinTotal = Math.min(...last.map(({ now, total }) => Math.abs(now - min) + total));
    const diffMaxTotal = Math.min(...last.map(({ now, total }) => Math.abs(now - max) + total));
    const abs = max - min;
    last = [
      { now: min, total: diffMaxTotal + abs },
      { now: max, total: diffMinTotal + abs },
    ];
  }
  return `${Math.min(...last.map(({ total }) => total))}`;
});