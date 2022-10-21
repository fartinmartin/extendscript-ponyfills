# extendscript-ponyfills

> https://github.com/Klustre/extender#why

## Ponys

<table><thead><tr><th colspan="2">array</th><th>object</th><th>string</th></tr></thead><tbody><tr><td>✅ <code>arrayFrom</code></td><td>✅ <code>forEach</code></td><td>🚧 <code>create</code></td><td>✅ <code>endsWith</code></td></tr><tr><td>✅ <code>every</code></td><td>✅ <code>groupBy</code></td><td>🚧 <code>defineProperties</code></td><td>✅ <code>includes</code></td></tr><tr><td>✅ <code>fill</code></td><td>✅ <code>includes</code></td><td>🚧 <code>defineProperty</code></td><td>✅ <code>padEnd</code></td></tr><tr><td>✅ <code>filter</code></td><td>✅ <code>indexOf</code></td><td>🚧 <code>getOwnPropertyDescriptor</code></td><td>✅ <code>padStart</code></td></tr><tr><td>✅ <code>find</code></td><td>✅ <code>isArray</code></td><td>🚧 <code>getPrototypeOf</code></td><td>✅ <code>repeat</code></td></tr><tr><td>✅ <code>findIndex</code></td><td>✅ <code>lastIndexOf</code></td><td>✅ <code>getOwnPropertyNames</code></td><td>✅ <code>startsWith</code></td></tr><tr><td>✅ <code>flat</code></td><td>✅ <code>map</code></td><td>✅ <code>keys</code></td><td>✅ <code>trim</code></td></tr><tr><td>✅ <code>flatMap</code></td><td>✅ <code>reduce</code></td><td></td><td></td></tr></tbody></table>

💡 `arrayFrom` works with After Effects [Collection objects](https://ae-scripting.docsforadobe.dev/other/collection.html#collection) whose index starts with 1, not 0.

Oh, also a single `function` pony:

```js
Function.prototype.bind() ✅
```
