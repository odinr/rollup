# rollup-plugin-html-style
[![Published on npm](https://img.shields.io/npm/v/rollup-plugin-lit-html-style.svg)](https://www.npmjs.com/package/rollup-plugin-lit-html-style)

**usage**

This module transforms css to a es6 template, you might need to transpile theplugin result.
```javascript
// rollup.config.js
import style from 'rollup-plugin-lit-html-style';
import babel from "rollup-plugin-babel";

export const config = {
 plugins: [
  style(),
  babel({
   extensions = [".js", ".scss"]
  })
 ]
}
export default config;
```

## options

**esmodules** `:boolean default: true`

**include** `:string[] default: ['**/*.scss']`

**exclude** `:string[] default: []`

**compress** `:boolean default: true`

**env** `:string default: esBrowsers|defaults` 
> if `option.esmodules` the plugin makes a lookup at caniuse-api for browsers that supports `es6-module`, else env is `default` [@BroswerList](https://github.com/browserslist/browserslist#readme)

**template** `:(css:string): string`
```javascript
(css) => `
  import { html } from "lit-element";
  export const style = html\`<style>${css}</style>\`;
  export default style;
`;
```
**compiler** `:({file,data}): Promise<{file,data}>`

**processor** `:({file,data}): Promise<string>`

## Example
*test.js*
```javascript
import {LitElement,html,customElement} from 'lit-element';
import style from './index.scss';

@customElement('test-element')
export class Test extends LitElement{
 render(): TemplateResult{
  return html`${style}<p>test</p>`;
 }
}
```
*test.scss*
```scss
:host{background:red}
```
*rollup.config.js*
```javascript
import babel from "rollup-plugin-babel";
import preset from "@babel/preset-env";
import style from 'rollup-plugin-lit-html-style';

const esmodules = true;

export const config = {
 input: 'test.js',
 output: { file: 'demo.js' }
  plugins: [
   style({ esmodules }),
   babel({
    extensions = [".js", ".scss"],
    presets: [[preset, { targets: { esmodules } }]]
   })
 ]
}

export default config;
```