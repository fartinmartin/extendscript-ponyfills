/**
 * Array.prototype.reduceRight() ponyfill (ES5)
 * Applies a function against an accumulator and each value of the array (from right-to-left)
 */
export function reduceRight<T, U>(
  array: T[],
  callback: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue?: U
): U {
  var len = array.length;
  var k = len - 1;
  var accumulator: U;

  if (arguments.length >= 3) {
    accumulator = initialValue!;
  } else {
    if (len === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = array[k] as unknown as U;
    k--;
  }

  while (k >= 0) {
    if (k in array) {
      accumulator = callback(accumulator, array[k], k, array);
    }
    k--;
  }

  return accumulator;
}
