/**
 * Tests whether all elements in the array pass the test implemented by the provided function
 * @param array The array to test
 * @param predicate Function to test each element
 * @param thisArg Value to use as `this` when executing predicate
 */
export function every<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any
): boolean {
  for (var i = 0; i < array.length; i++) {
    if (!predicate.call(thisArg, array[i], i, array)) {
      return false;
    }
  }
  return true;
}
