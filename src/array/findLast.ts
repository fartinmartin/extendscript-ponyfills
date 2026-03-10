/**
 * Array.prototype.findLast() ponyfill (ES2023)
 * Returns the last element that satisfies the provided testing function
 */
export function findLast<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => boolean,
  thisArg?: any
): T | undefined {
  for (var i = array.length - 1; i >= 0; i--) {
    if (callback.call(thisArg, array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
