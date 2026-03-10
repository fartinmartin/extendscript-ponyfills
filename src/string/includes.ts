/**
 * Determines whether one string may be found within another string
 * @param str The string to search in
 * @param searchString The string to search for
 * @param position The position within the string to begin searching
 */
export function includes(str: string, searchString: string, position?: number): boolean {
  var pos = position || 0;
  return str.indexOf(searchString, pos) !== -1;
}
