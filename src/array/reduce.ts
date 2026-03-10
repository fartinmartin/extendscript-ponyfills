/**
 * Executes a reducer function on each element of the array, resulting in a single output value
 * @param array The array to reduce
 * @param callback Function to execute on each element
 * @param initialValue Value to use as the first argument to the first call of the callback
 */
export function reduce<T, U>(
  array: T[],
  callback: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue?: U
): U {
  var hasInitial = arguments.length >= 3;
  var accumulator = hasInitial ? initialValue : array[0];
  var startIndex = hasInitial ? 0 : 1;

  for (var i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator as U, array[i], i, array);
  }

  return accumulator as U;
}
