/**
 * Executes a provided function once for each array element
 * @param array The array to iterate over
 * @param callback Function to execute for each element
 * @param thisArg Value to use as `this` when executing callback
 */
export function forEach<T>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => void,
  thisArg?: any
): void {
  for (var i = 0; i < array.length; i++) {
    callback.call(thisArg, array[i], i, array);
  }
}
