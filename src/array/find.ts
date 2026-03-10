/**
 * Returns the value of the first element in the array that satisfies the provided testing function
 * @param array The array to search
 * @param predicate Function to test each element
 * @param thisArg Value to use as `this` when executing predicate
 */
export function find<T>(
  array: T[],
  predicate: (value: T, index: number, obj: T[]) => unknown,
  thisArg?: any
): T | undefined {
  for (var i = 0; i < array.length; i++) {
    if (predicate.call(thisArg, array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
