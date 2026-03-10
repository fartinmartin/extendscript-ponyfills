/**
 * Object.seal() ponyfill (ES5, but not supported in ExtendScript)
 * Seals an object: prevents new properties from being added and marks all existing properties as non-configurable
 * Note: This is a no-op in ExtendScript since we can't actually seal objects
 * Returns the object unchanged to maintain compatibility
 */
export function seal<T>(obj: T): T {
  // In ExtendScript, we can't actually seal objects
  // This is a no-op that returns the object unchanged
  return obj;
}
