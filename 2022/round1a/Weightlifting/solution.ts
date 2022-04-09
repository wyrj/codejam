import { main } from '../../../utils/main';

main(async (io) => {
  const [E, W] = await io.getIntArray();
  const X: number[][] = [];
  for (let i = 0; i < E; i++) {
    X.push(await io.getIntArray());
  }

  const tableC: number[][] = Array.from(X, () => new Array(X.length));
  for (let i = 0; i < X.length; i++) {
    const commonSet = X[i].slice();
    let commonSize = commonSet.reduce((s, v) => s + v);
    tableC[i][i] = commonSize;
    for (let j = i + 1; j < X.length; j++) {
      for (let k = 0; k < W; k++) {
        if (X[j][k] < commonSet[k]) {
          commonSize -= (commonSet[k] - X[j][k]);
          commonSet[k] = X[j][k];
        }
      }
      tableC[i][j] = commonSize;
    }
  }

  const tableM: number[][] = Array.from(X, () => new Array(X.length));
  for (let i = 0; i < X.length; i++) {
    tableM[i][i] = 0;
  }
  for (let iter = 1; iter < X.length; iter++) {
    for (let i = 0; i < X.length - iter; i++) {
      const j = iter + i;
      tableM[i][j] = Math.min(...Array.from({ length: j - i }, (_, idx) => {
        const k = i + idx;
        return tableM[i][k] + tableM[k + 1][j] + 2 * (tableC[i][k] + tableC[k + 1][j] - 2 * tableC[i][j]);
      }))
    }
  }
  return `${tableM[0][X.length - 1] + 2 * tableC[0][X.length - 1]}`;
});