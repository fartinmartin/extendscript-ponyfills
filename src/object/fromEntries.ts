/**
 * Object.fromEntries() ponyfill (ES2019)
 * Transforms a list of key-value pairs into an object
 */
export function fromEntries<T = any>(
  entries: Iterable<readonly [PropertyKey, T]>
): { [k: string]: T } {
  var obj: { [k: string]: T } = {};

  // Handle array-like iterables
  if (Array.isArray(entries)) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (entry && entry.length >= 2) {
        obj[String(entry[0])] = entry[1];
      }
    }
  } else {
    // Try to iterate (for Map, Set, etc.)
    // Note: ExtendScript doesn't support for...of, so we cast to array
    try {
      var arr = Array.prototype.slice.call(entries);
      for (var j = 0; j < arr.length; j++) {
        var e = arr[j];
        if (e && e.length >= 2) {
          obj[String(e[0])] = e[1];
        }
      }
    } catch (err) {
      throw new TypeError('Object.fromEntries requires an iterable');
    }
  }

  return obj;
}
