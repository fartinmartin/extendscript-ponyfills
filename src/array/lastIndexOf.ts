/**
 * Returns the last index at which a given element can be found in the array
 * @param array The array to search
 * @param searchElement The element to locate
 * @param fromIndex The index to start searching backwards from
 */
export function lastIndexOf<T>(array: T[], searchElement: T, fromIndex?: number): number {
  var start = fromIndex !== undefined ? fromIndex : array.length - 1;
  if (start < 0) {
    start = array.length + start;
  }

  for (var i = start; i >= 0; i--) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}
