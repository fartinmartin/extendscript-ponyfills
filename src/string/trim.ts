/**
 * Removes whitespace from both ends of a string
 * @param str The string to trim
 */
export function trim(str: string): string {
  return str.replace(/^\s+|\s+$/g, '');
}
