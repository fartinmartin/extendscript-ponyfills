/**
 * Creates a new function that, when called, has its this keyword set to the provided value
 * @param fn The function to bind
 * @param thisArg The value to be passed as the this parameter
 */
export function bind(fn: Function, thisArg: any): Function {
  var args = [];
  for (var i = 2; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return function (this: any) {
    var boundArgs = args.slice();
    for (var i = 0; i < arguments.length; i++) {
      boundArgs.push(arguments[i]);
    }
    return fn.apply(thisArg, boundArgs);
  };
}
