# rollup-plugin-html-style
[![Published on npm](https://img.shields.io/npm/v/rollup-plugin-lit-html-style.svg)](https://www.npmjs.com/package/rollup-plugin-lit-html-style)

## Usage

This module transforms css to a es6 template, you might need to transpile the plugin result.
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

## Options

### required
**none**

### optional

**esmodules?**`:boolean default: true`

**include?**`:string[] default: ['**/*.scss']`

**exclude?**`:string[] default: []`

**compress?**`:boolean default: true`

**env?**`:string default: esBrowsers|'defaults'` 
> if `option.esmodules` the plugin makes a lookup at caniuse-api for browsers that supports `es6-module`, else env is `default` [@BroswerList](https://github.com/browserslist/browserslist#readme)

**template?**`:(css:string): string`
```javascript
(css) => `
  import { html } from "lit-element";
  export const style = html\`<style>${css}</style>\`;
  export default style;
`;
```
**compiler?**`:({file,data}): Promise<{data}>`

> *BringYourOwnCompiler* - atm only `node-sass` is bundled, but provide your own or leave a feature request for other compilers or features?! 
```javascript
import nodeSass from "node-sass";
export default (options) =>
  new Promise((resolve, reject) => {
    const resolved = ({ css }) => resolve({ data: css.toString() });
    nodeSass.render(options, (err, res) => (err ? reject(err) : resolved(res)));
  });
```

**processor?**`:({file,data}): Promise<string>`

> *BringYourOwnProcessor* - this plugin uses `postcss` with `postcss-preset-env` for autoprefix and `cssnano` for compress
```javascript
import postcss from "postcss";
export default (options) => {
  const { file, data, plugins } = options;
  return new Promise((resolve, reject) => {
    postcss(plugins)
      .process(data, { from: file })
      .then(({ css }) => resolve(css), reject);
  });
};
```
## Example
*test.js*
```javascript
import {LitElement,html,customElement} from 'lit-element';
import style from './test.scss';

@customElement('test-element')
export class Test extends LitElement{
 render(){
  return html`${style}<p>test</p>`;
 }
}
```
*test.scss*
```css
:host{
  display: inline-block;
  background: red;
}
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