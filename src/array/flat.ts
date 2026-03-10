/**
 * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
 * @param array The array to flatten
 * @param depth The maximum recursion depth
 */
export function flat<T>(array: T[], depth?: number): any[] {
  var d = depth === undefined ? 1 : depth;
  var result: any[] = [];

  function flattenHelper(arr: any[], currentDepth: number): void {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      if (currentDepth > 0 && item instanceof Array) {
        flattenHelper(item, currentDepth - 1);
      } else {
        result.push(item);
      }
    }
  }

  flattenHelper(array, d);
  return result;
}
