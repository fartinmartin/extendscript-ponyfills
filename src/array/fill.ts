/**
 * Fills all the elements of an array from a start index to an end index with a static value
 * @param array The array to fill
 * @param value The value to fill the array with
 * @param start The index to start filling at
 * @param end The index to stop filling at
 */
export function fill<T>(array: T[], value: T, start?: number, end?: number): T[] {
  var len = array.length;
  var relativeStart = start || 0;
  var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
  var relativeEnd = end === undefined ? len : end;
  var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

  for (var i = k; i < final; i++) {
    array[i] = value;
  }
  return array;
}
