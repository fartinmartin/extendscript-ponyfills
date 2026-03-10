/**
 * Math.trunc() ponyfill (ES6)
 * Returns the integer part of a number by removing any fractional digits
 */
export function trunc(x: number): number {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}
