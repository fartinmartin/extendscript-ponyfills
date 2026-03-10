/**
 * Returns the first index at which a given element can be found in the array
 * @param array The array to search
 * @param searchElement The element to locate
 * @param fromIndex The index to start the search at
 */
export function indexOf<T>(array: T[], searchElement: T, fromIndex?: number): number {
  var start = fromIndex || 0;
  if (start < 0) {
    start = Math.max(0, array.length + start);
  }

  for (var i = start; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}
