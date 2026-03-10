/**
 * Returns an array of a given object's own enumerable string-keyed property [key, value] pairs
 * @param obj The object whose enumerable own properties are to be returned
 */
export function entries<T>(obj: { [s: string]: T } | ArrayLike<T>): [string, T][] {
  var result: [string, T][] = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}
