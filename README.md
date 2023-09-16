# extendscript-ponyfills

## Why

ExtendScript is stuck in ES3, but we like our simple ES6 methods. A common solution is to polyfill these methods, but I'll let [sindresorhus](https://github.com/sindresorhus/ponyfill#how-are-ponyfills-better-than-polyfills) and [hyperbrew](https://hyperbrew.co/blog/top-2-extendscript-mistakes-and-how-to-avoid-them/) explain why that's not a good idea, especially so in Adobe-land.

## Usage

`npm i extendscript-ponyfills`

Or, download the [latest release](https://github.com/fartinmartin/extendscript-ponyfills/releases) to [`#include`](https://extendscript.docsforadobe.dev/extendscript-tools-features/preprocessor-directives.html) in your `.jsx` script. By default the ponyfills are namespaced to `PONIES`—you can change this name on the first line of the .jsx, or remove the IIFE entirely to elevate the methods to the global scope.

## Ponyfills

### Array

- `arrayFrom`
- `difference`
- `differenceWith`
- `every`
- `fill`
- `filter`
- `find`
- `findIndex`
- `flat`
- `flatMap`
- `forEach`
- `groupBy`
- `includes`
- `indexOf`
- `intersection`
- `intersectionWith`
- `isArray`
- `lastIndexOf`
- `map`
- `reduce`
- `some`

### String

- `padEnd`
- `endsWith`
- `includes`
- `padStart`
- `repeat`
- `startsWith`
- `trim`

### Object

- `assign`
- `entries`

### Function

- `bind`

## Similar Projects

- klustre's [`extender`](https://github.com/Klustre/extender)
