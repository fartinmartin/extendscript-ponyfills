/**
 * Number.isInteger() ponyfill (ES6)
 * Determines whether the passed value is an integer
 */
export function isInteger(value: any): boolean {
  return typeof value === 'number' && global.isFinite(value) && Math.floor(value) === value;
}
