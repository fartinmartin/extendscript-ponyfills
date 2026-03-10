/**
 * Object.preventExtensions() ponyfill (ES5, but not supported in ExtendScript)
 * Prevents new properties from being added to an object
 * Note: This is a no-op in ExtendScript since we can't actually prevent extensions
 * Returns the object unchanged to maintain compatibility
 */
export function preventExtensions<T>(obj: T): T {
  // In ExtendScript, we can't actually prevent extensions
  // This is a no-op that returns the object unchanged
  return obj;
}
