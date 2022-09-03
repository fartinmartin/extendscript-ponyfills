# Adobe Library Starter

A basic setup for writing libraries for Adobe `.jsx` scripts in TypeScript. This project will build two files:

- a `script.jsx` ready to run in your Adobe program of choice and/or be `#include`'d into vanilla `.jsx` scripts
- a `index.js` ready to be imported into [`adobe-script-starter`](https://github.com/motiondeveloper/adobe-script-starter) (and [similar](https://github.com/hyperbrew/bolt-cep)) projects

This project will also generate type declaration files and [docs](https://fartinmartin.github.io/adobe-lib-starter/) (via `typedoc`) for users of your library to consume.

> ⚠️ I'm not 100% sure if this setup is necessary, but it's useful for me.

> 🚧 This setup is still very much under construction, but feedback/contributions are very much welcome!

## Start

- `gh repo create <my-project> --public --template fartinmartin/adobe-lib-starter`
- `gh repo clone <me>/<my-project>`
- `npm run rename` renames project with your details
- `npm i` yadda yadda yadda

## Commands

- `build` compile and bundle scripts, as well as update types and docs
- `dev` watch mode
- `release` create release on github with script attached

---

- `es` runs swc's spack to output `dist/index.js`
- `jsx` runs swc's spack to output `dist/script.jsx`
- `spack` runs both spack commands at once
- `jsx-remove-export-lines` removes lines that start with `export` in `dist/script.jsx` file
- `types` generate type declaration files
- `docs` generate typedoc docs
- `rename` renames project based on directory name and currently logged in GitHub user

## Features

- Modern JavaScript syntax compiled to ES3 and bundled using [SWC](https://github.com/swc-project/swc)

  > Note: syntax is transformed, but no pollyfills/shims are included, so you won't be able to use features such as `Array.map` and so on. Hoping to add this ability via SWCs core-js integration in the future.

- Types from [bbb999/Types-for-Adobe](https://github.com/bbb999/Types-for-Adobe)

  The types for After Effects are included by default. You can add programs in `tsconfig.json`, by adding them to `compilerOptions.types`.

- Debugging with the [ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug)

  Pressing <kbd>F5</kbd> will run `dist/script.jsx` in your selected application. Edit `.vscode/launch.json` to specify a different script.

- Testing locally

  > Note: <sup>(mostly for myself)</sup> you can test your work by running `npm link` in your library's directory. Then, in your script directory, run `npm link [path/to/your/lib]`.
