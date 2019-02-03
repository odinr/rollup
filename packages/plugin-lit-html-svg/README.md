# rollup-plugin-lit-html-svg
[![Published on npm](https://img.shields.io/npm/v/rollup-plugin-lit-html-svg.svg)](https://www.npmjs.com/package/rollup-plugin-lit-html-svg)

**usage**

This module transforms css to a es6 template, you might need to transpile theplugin result.
```javascript
// rollup.config.js
import symbol from 'rollup-plugin-html-svg';
import babel from "rollup-plugin-babel";

export const config = {
 plugins: [
  symbol()
  babel({
   extensions = [".js", ".svg"]
  })
 ];
}
export default config;
```
