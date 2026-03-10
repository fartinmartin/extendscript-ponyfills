/**
 * Maps each element using a mapping function, then flattens the result into a new array
 * @param array The array to map and flatten
 * @param callback Function that produces an element of the new array
 * @param thisArg Value to use as `this` when executing callback
 */
export function flatMap<T, U>(
  array: T[],
  callback: (value: T, index: number, array: T[]) => U | U[],
  thisArg?: any
): U[] {
  var result: U[] = [];
  for (var i = 0; i < array.length; i++) {
    var mapped = callback.call(thisArg, array[i], i, array);
    if (mapped instanceof Array) {
      for (var j = 0; j < mapped.length; j++) {
        result.push(mapped[j]);
      }
    } else {
      result.push(mapped);
    }
  }
  return result;
}
