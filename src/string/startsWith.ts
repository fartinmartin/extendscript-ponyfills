/**
 * Determines whether a string begins with the characters of a specified string
 * @param str The string to search in
 * @param searchString The characters to search for
 * @param position The position to start searching from
 */
export function startsWith(str: string, searchString: string, position?: number): boolean {
  var pos = position || 0;
  return str.substring(pos, pos + searchString.length) === searchString;
}
