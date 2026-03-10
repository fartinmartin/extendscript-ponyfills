/**
 * Determines whether the passed value is an Array
 * @param arg The value to be checked
 */
export function isArray(arg: any): arg is any[] {
  try {
    return arg instanceof Array;
  } catch (e) {
    return false;
  }
}
