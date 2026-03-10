/**
 * Returns the index of the first element in the array that satisfies the provided testing function
 * @param array The array to search
 * @param predicate Function to test each element
 * @param thisArg Value to use as `this` when executing predicate
 */
export function findIndex<T>(
  array: T[],
  predicate: (value: T, index: number, obj: T[]) => unknown,
  thisArg?: any
): number {
  for (var i = 0; i < array.length; i++) {
    if (predicate.call(thisArg, array[i], i, array)) {
      return i;
    }
  }
  return -1;
}
