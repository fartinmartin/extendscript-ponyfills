/**
 * Copies all enumerable own properties from one or more source objects to a target object
 * @param target The target object
 * @param sources The source object(s)
 */
export function assign(target: any): any {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    if (source !== null && source !== undefined) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          to[key] = source[key];
        }
      }
    }
  }

  return to;
}
