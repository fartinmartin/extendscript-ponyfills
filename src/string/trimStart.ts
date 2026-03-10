/**
 * String.prototype.trimStart() / trimLeft() ponyfill (ES2019)
 * Removes whitespace from the beginning of a string
 */
export function trimStart(str: string): string {
  return str.replace(/^\s+/, '');
}
