/**
 * Global type definitions for ExtendScript ponyfills
 *
 * Import this file to augment the global Array, String, Object, and Function prototypes
 * with ES5+ methods that are ponyfilled at runtime.
 *
 * Usage:
 *   /// <reference types="extendscript-ponyfills/global" />
 *
 * Or in tsconfig.json:
 *   "types": ["extendscript-ponyfills/global"]
 */

declare global {
  interface Array<T> {
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     */
    filter<S extends T>(
      predicate: (value: T, index: number, array: T[]) => value is S,
      thisArg?: any
    ): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];

    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     */
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

    /**
     * Calls the specified callback function for all the elements in an array.
     * The return value of the callback function is the accumulated result.
     */
    reduce<U>(
      callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
      initialValue: U
    ): U;
    reduce(
      callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T
    ): T;
    reduce(
      callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
      initialValue: T
    ): T;

    /**
     * Performs the specified action for each element in an array.
     */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
     */
    find<S extends T>(
      predicate: (value: T, index: number, obj: T[]) => value is S,
      thisArg?: any
    ): S | undefined;
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
     */
    findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     */
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

    /**
     * Determines whether all the members of an array satisfy the specified test.
     */
    every<S extends T>(
      predicate: (value: T, index: number, array: T[]) => value is S,
      thisArg?: any
    ): this is S[];
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;

    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     */
    includes(searchElement: T, fromIndex?: number): boolean;

    /**
     * Returns the index of the first occurrence of a value in an array.
     */
    indexOf(searchElement: T, fromIndex?: number): number;

    /**
     * Returns the index of the last occurrence of a specified value in an array.
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;

    /**
     * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
     */
    flat<A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[];

    /**
     * Calls a defined callback function on each element of an array. Then, flattens the result into a new array.
     */
    flatMap<U, This = undefined>(
      callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
      thisArg?: This
    ): U[];

    /**
     * Changes all array elements from start to end index to a static value and returns the modified array.
     */
    fill(value: T, start?: number, end?: number): this;
  }

  interface ArrayConstructor {
    /**
     * Creates an array from an array-like or iterable object.
     */
    from<T>(arrayLike: ArrayLike<T> | Iterable<T>): T[];
    from<T, U>(
      arrayLike: ArrayLike<T> | Iterable<T>,
      mapfn: (v: T, k: number) => U,
      thisArg?: any
    ): U[];

    /**
     * Returns true if the argument is an array, false otherwise.
     */
    isArray(arg: any): arg is any[];
  }

  interface String {
    /**
     * Removes the leading and trailing white space and line terminator characters from a string.
     */
    trim(): string;

    /**
     * Returns true if searchString appears as a substring of the result of converting this
     * object to a String, at one or more positions that are greater than or equal to position;
     * otherwise, returns false.
     */
    includes(searchString: string, position?: number): boolean;

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * position. Otherwise returns false.
     */
    startsWith(searchString: string, position?: number): boolean;

    /**
     * Returns true if the sequence of elements of searchString converted to a String is the
     * same as the corresponding elements of this object (converted to a String) starting at
     * endPosition – length(this). Otherwise returns false.
     */
    endsWith(searchString: string, endPosition?: number): boolean;

    /**
     * Pads the current string with a given string (possibly repeated) so that the resulting
     * string reaches a given length. The padding is applied from the start of the current string.
     */
    padStart(targetLength: number, padString?: string): string;

    /**
     * Pads the current string with a given string (possibly repeated) so that the resulting
     * string reaches a given length. The padding is applied from the end of the current string.
     */
    padEnd(targetLength: number, padString?: string): string;

    /**
     * Returns a String value that is made from count copies appended together. If count is 0,
     * the empty string is returned.
     */
    repeat(count: number): string;
  }

  interface ObjectConstructor {
    /**
     * Copy the values of all of the enumerable own properties from one or more source objects to
     * a target object. Returns the target object.
     */
    assign<T extends {}, U>(target: T, source: U): T & U;
    assign<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;
    assign<T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    assign(target: object, ...sources: any[]): any;

    /**
     * Returns an array of key/values of the enumerable properties of an object.
     */
    entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];
    entries(o: {}): [string, any][];
  }

  interface Function {
    /**
     * For a given function, creates a bound function that has the same body as the original function.
     * The this object of the bound function is associated with the specified object, and has the
     * specified initial parameters.
     */
    bind(this: Function, thisArg: any, ...argArray: any[]): any;
  }
}

// Helper type for flat() method
type FlatArray<Arr, Depth extends number> = {
  done: Arr;
  recur: Arr extends ReadonlyArray<infer InnerArr>
    ? FlatArray<
        InnerArr,
        [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]
      >
    : Arr;
}[Depth extends -1 ? 'done' : 'recur'];

export {};
