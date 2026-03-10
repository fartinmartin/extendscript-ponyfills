/**
 * Creates a new Array instance from an array-like or iterable object
 * @param arrayLike An array-like or iterable object to convert to an array
 * @param mapFn Optional map function to call on every element
 * @param thisArg Value to use as `this` when executing mapFn
 */
export function from<T, U>(
  arrayLike: ArrayLike<T>,
  mapFn?: (v: T, k: number) => U,
  thisArg?: any
): (T | U)[] {
  var result = [];
  var len = arrayLike.length || 0;

  for (var i = 0; i < len; i++) {
    var value = arrayLike[i];
    if (mapFn) {
      result.push(mapFn.call(thisArg, value, i));
    } else {
      result.push(value);
    }
  }
  return result;
}
