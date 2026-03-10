/**
 * Pads the current string with another string until the resulting string reaches the given length
 * @param str The string to pad
 * @param targetLength The length of the resulting string
 * @param padString The string to pad with
 */
export function padStart(str: string, targetLength: number, padString?: string): string {
  var pad = padString || ' ';
  if (str.length >= targetLength) {
    return str;
  }

  var padLength = targetLength - str.length;
  var repeats = Math.ceil(padLength / pad.length);
  var padding = '';
  for (var i = 0; i < repeats; i++) {
    padding += pad;
  }
  return padding.substring(0, padLength) + str;
}
