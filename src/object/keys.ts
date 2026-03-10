/**
 * Object.keys() ponyfill (ES5, but important for ExtendScript)
 * Returns an array of a given object's own enumerable property names
 */
export function keys(obj: any): string[] {
  var result: string[] = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
}
