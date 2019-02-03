# rollup-plugin-html-style
[![Published on npm](https://img.shields.io/npm/v/rollup-plugin-lit-html-style.svg)](https://www.npmjs.com/package/rollup-plugin-lit-html-style)

**usage**

This module transforms css to a es6 template, you might need to transpile theplugin result.
```javascript
// rollup.config.js
import style from 'rollup-plugin-html-style';
import babel from "rollup-plugin-babel";

export const config = {
 plugins: [
  style()
  babel({
   extensions = [".js", ".scss"]
  })
 ];
}
export default config;
```

## options

**esmodules** `:boolean default: true`

**include** `:string[] default: ['**/*.scss']`

**exclude** `:string[] default: []`

**compress** `:boolean default: true`

**env** `:string default: esBrowsers|defaults` 
> makes a lookup at caniuse-api for browsers that supports `<script type="module"></script>`

**template** `:(css:string): string`

**compiler** `:({file,data}): Promise<{file,data}>`

**processor** `:({file,data}): Promise<string>`

