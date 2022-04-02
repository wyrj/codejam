const sortedIndex = require('lodash/sortedIndex');

/**
 * @param {number[]} arr
 * @param {number} v
 */
function removeValue(arr, v) {
  const index = sortedIndex(arr, v);
  if (arr[index] === v) {
    arr.splice(index, 1);
  }
}

/**
 * @param {number[]} arr
 * @param {number} v
 */
function addValue(arr, v) {
  const index = sortedIndex(arr, v);
  arr.splice(index, 0, v);
}

/**
 * @param {number[]} F
 * @param {number[]} P
 */
function resolve(F, P) {
  const nodes = Array.from(
    { length: F.length + 1 },
    () => ({ childValueMap: new Map(), childValues: [], childPickMap: new Map(), childPick: [] }),
  )
  for (let i = 0; i < F.length; i++) {
    let currentId = i + 1;
    let currentValue = [F[i]];
    let currentPick = [F[i]];
    while (currentId !== 0) {
      const parentId = P[currentId - 1];
      const parentNode = nodes[parentId];
      const parentValue = parentNode.childValues;
      const oldValues = parentNode.childValueMap.get(currentId);
      if (oldValues) {
        for (const v of oldValues) {
          removeValue(parentValue, v);
        }
      }
      parentNode.childValueMap.set(currentId, currentValue);
      for (const v of currentValue) {
        addValue(parentValue, v);
      }
      const parentPick = parentNode.childPick;
      const oldPick = parentNode.childPickMap.get(currentId);
      if (oldPick) {
        for (const v of oldPick) {
          removeValue(parentPick, v);
        }
      }
      parentNode.childPickMap.set(currentId, currentPick);
      for (const v of currentPick) {
        addValue(parentPick, v);
      }

      currentId = parentId;
      currentPick = parentPick.slice();
      currentValue = parentValue.slice();
      if (currentPick[0] < F[parentId - 1]) {
        removeValue(currentValue, currentPick[0]);
        addValue(currentValue, F[parentId - 1]);
        currentPick = [F[parentId - 1]];
      }
    }
  }
  return nodes[0].childValues.reduce((s, v) => s + v, 0);
}

async function handleCase(io, num) {
  await io.getIntArray();
  const F = await io.getIntArray();
  const P = await io.getIntArray();
  io.printAns(num, resolve(F, P));
}

require('../../../template').main(handleCase);
