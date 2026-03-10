/**
 * Array.prototype.findLastIndex() ponyfill (ES2023)
 * Returns the index of the last element that satisfies the provided testing function
 */
export function findLastIndex<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => boolean,
  thisArg?: any
): number {
  for (var i = array.length - 1; i >= 0; i--) {
    if (callback.call(thisArg, array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
