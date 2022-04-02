async function resolve(io, N, K) {
  const knownSet = new Set();
  const neighborCount = new Array(N + 1).fill(null);
  const neighborSet = Array.from(neighborCount, () => new Set());
  let lastKnown = 0;
  let [now, passage] = await io.getIntArray();
  neighborCount[now] = passage;
  knownSet.add(now);
  for (let k = 0; k < K; k++) {
    if (((neighborCount[now] - neighborSet[now].size) / neighborCount[now]) > ((N - knownSet.size) / N)) {
      io.printLine('W');
    } else {
      for (let i = lastKnown + 1; i <= N; i++) {
        if (neighborCount[i] === null) {
          lastKnown = i;
          break;
        }
      }
      io.printLine(`T ${lastKnown}`);
    }
    const [next, passage] = await io.getIntArray();
    neighborCount[next] = passage;
    knownSet.add(next);
    neighborSet[now].add(next);
    neighborSet[next].add(now);
    now = next;
  }
  const sum = neighborCount.slice(1).map((v, index) => {
    if (v) {
      return v + (v - neighborSet[index].size);
    }
    return neighborSet[index].size;
  }).reduce((s, v) => s + v, 0);
  console.error(N, K, neighborCount.reduce((s, v) => s + (v ? 1 : 0), 0));
  io.printLine(`E ${Math.floor(sum / 2)}`);
}

async function handleCase(io) {
  const [N, K] = await io.getIntArray();
  await resolve(io, N, K);
}

async function main(io) {
  const [T] = await io.getIntArray();
  for (let t = 1; t <= T; t++) {
    await handleCase(io);
  }
  io.close();
}

main(new (require('../../../template').CustomIO)());
