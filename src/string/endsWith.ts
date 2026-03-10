/**
 * Determines whether a string ends with the characters of a specified string
 * @param str The string to search in
 * @param searchString The characters to search for
 * @param endPosition The position to end searching at
 */
export function endsWith(str: string, searchString: string, endPosition?: number): boolean {
  var len = endPosition === undefined ? str.length : endPosition;
  var end = len - searchString.length;
  var lastIndex = str.indexOf(searchString, end);
  return lastIndex !== -1 && lastIndex === end;
}
