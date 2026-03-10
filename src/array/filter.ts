/**
 * Creates a new array with all elements that pass the test implemented by the provided function
 * @param array The array to filter
 * @param predicate Function to test each element
 * @param thisArg Value to use as `this` when executing predicate
 */
export function filter<T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any
): T[] {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate.call(thisArg, array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}
