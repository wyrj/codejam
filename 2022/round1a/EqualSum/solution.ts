import { interaction } from "../../../utils/interaction";

interaction(async (io) => {
  const [N] = await io.getIntArray();
  if (N === -1) {
    io.close();
  }
  const A = Array.from({ length: N }, (_, idx) => {
    return idx < 30 ? Math.pow(2, idx) : (1e9 - (N - idx - 1));
  });
  io.printLine(A.join(' '));
  const B = await io.getIntArray();
  if (B[0] === -1) {
    io.close();
  }
  const arr = B.concat(A);
  arr.sort((lhs, rhs) => lhs - rhs);
  let target = arr.reduce((s, v) => (s + v / 2), 0);
  const pick = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (target >= arr[i]) {
      target -= arr[i];
      pick.push(arr[i]);
    }
  }

  io.printLine(pick.join(' '));
});