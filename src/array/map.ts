/**
 * Creates a new array with the results of calling a provided function on every element
 * @param array The array to iterate over
 * @param callback Function that produces an element of the new array
 * @param thisArg Value to use as `this` when executing callback
 */
export function map<T, U>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => U,
  thisArg?: any
): U[] {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(callback.call(thisArg, array[i], i, array));
  }
  return result;
}
