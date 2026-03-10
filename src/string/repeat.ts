/**
 * Constructs and returns a new string which contains the specified number of copies of the string
 * @param str The string to repeat
 * @param count The number of times to repeat the string
 */
export function repeat(str: string, count: number): string {
  if (count < 0 || count === Infinity) {
    throw new RangeError('Invalid count value');
  }

  var result = '';
  for (var i = 0; i < count; i++) {
    result += str;
  }
  return result;
}
