/**
 * Object.values() ponyfill (ES2017)
 * Returns an array of a given object's own enumerable property values
 */
export function values(obj: any): any[] {
  var result: any[] = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}
