/**
 * Math.sign() ponyfill (ES6)
 * Returns the sign of a number, indicating whether the number is positive, negative or zero
 */
export function sign(x: number): number {
  x = +x; // convert to number
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
}
