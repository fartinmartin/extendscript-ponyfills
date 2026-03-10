/**
 * Object.freeze() ponyfill (ES5, but not supported in ExtendScript)
 * Freezes an object: prevents new properties from being added and marks all existing properties as non-configurable
 * Note: This is a no-op in ExtendScript since we can't actually prevent modifications
 * Returns the object unchanged to maintain compatibility
 */
export function freeze<T>(obj: T): T {
  // In ExtendScript, we can't actually freeze objects
  // This is a no-op that returns the object unchanged
  // This allows code using Object.freeze() to run without errors
  return obj;
}
