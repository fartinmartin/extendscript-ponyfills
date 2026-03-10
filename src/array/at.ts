/**
 * Array.prototype.at() ponyfill (ES2022)
 * Returns the element at the specified index, supporting negative indices
 */
export function at<T>(array: T[], index: number): T | undefined {
  var len = array.length;
  // Convert negative index to positive
  var k = index >= 0 ? index : len + index;
  // Return undefined if out of bounds
  if (k < 0 || k >= len) return undefined;
  return array[k];
}
