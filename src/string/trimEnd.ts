/**
 * String.prototype.trimEnd() / trimRight() ponyfill (ES2019)
 * Removes whitespace from the end of a string
 */
export function trimEnd(str: string): string {
  return str.replace(/\s+$/, '');
}
