/**
 * Determines whether an array includes a certain element
 * @param array The array to search
 * @param searchElement The element to search for
 * @param fromIndex The position to start searching from
 */
export function includes<T>(array: T[], searchElement: T, fromIndex?: number): boolean {
  var start = fromIndex || 0;
  if (start < 0) {
    start = Math.max(0, array.length + start);
  }

  for (var i = start; i < array.length; i++) {
    if (array[i] === searchElement || (array[i] !== array[i] && searchElement !== searchElement)) {
      return true;
    }
  }
  return false;
}
