import { main } from '../../../utils/main';

interface StackOption {
  stack: number[];
  minStep: number;
}

function calcStep(prevStack: number[], nextStack: number[]): number {
  const minLen = Math.min(prevStack.length, nextStack.length);
  let i = 0;
  while (i < minLen && prevStack[i] === nextStack[i]) {
    i += 1;
  }
  return (prevStack.length - i) + (nextStack.length - i);
}

const cache = new Map<string, number[][]>();
function getPermutation(request: number[]): number[][] {
  if (request.every(v => v === 0)) {
    return [];
  }
  const key = request.join(',');
  let result = cache.get(key);
  if (!result) {
    result = [];
    for (let i = 0; i < request.length; i++) {
      if (request[i] === 0) {
        continue;
      }
      request[i] -= 1;
      const nextLevelResults = getPermutation(request);
      if (nextLevelResults.length === 0) {
        result.push([i]);
      } else {
        for (const nextLevelResult of nextLevelResults) {
          result.push([i, ...nextLevelResult]);
        }
      }
      request[i] += 1;
    }
    cache.set(key, result);
  }
  return result;
}

function generateStackOption(request: number[], lastStackOption: StackOption[]): StackOption[] {
  return getPermutation(request).map(
    stack => ({ stack, minStep: Math.min(...lastStackOption.map(o => (o.minStep + calcStep(o.stack, stack)))) })
  )
}

main(async (io) => {
  const [E] = await io.getIntArray();
  const X = [];
  for (let i = 0; i < E; i++) {
    X.push(await io.getIntArray());
  }

  let lastStackOption: StackOption[] = [{ stack: [], minStep: 0 }];
  for (const exer of X) {
    const stackOption = generateStackOption(exer, lastStackOption);
    lastStackOption = stackOption;
  }
  return `${Math.min(...lastStackOption.map(o => (o.minStep + calcStep(o.stack, []))))}`;
});