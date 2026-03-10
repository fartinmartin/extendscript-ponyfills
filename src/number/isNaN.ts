/**
 * Number.isNaN() ponyfill (ES6)
 * Determines whether the passed value is NaN and its type is Number
 * Unlike global isNaN(), this doesn't coerce the value to a number first
 */
export function isNaN(value: any): boolean {
  // NaN is the only value that is not equal to itself
  return typeof value === 'number' && value !== value;
}
