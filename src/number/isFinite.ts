/**
 * Number.isFinite() ponyfill (ES6)
 * Determines whether the passed value is a finite number
 * Unlike global isFinite(), this doesn't coerce the value to a number first
 */
export function isFinite(value: any): boolean {
  return typeof value === 'number' && global.isFinite(value);
}
